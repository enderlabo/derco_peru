<template>
  <div
    class="FormSelect"
    :style="optionsVisible && `z-index: 300`"
    @keydown.tab="tabKeyPressed = true"
    @blur.capture="handleBlur"
  >
    <span :id="`${_uid}-label`">{{ label }}</span>
    <div class="FormSelect__control">
      <button
        :id="`${_uid}-button`"
        ref="button"
        aria-haspopup="listbox"
        :aria-labelledby="`${_uid}-label ${_uid}-button`"
        :aria-expanded="optionsVisible"
        class="FormSelect__button"
        @click="toggleOptions"
        @keyup.up.down.prevent="showOptions"
        @keyup.up.prevent="selectPrevOption"
        @keyup.down.prevent="selectNextOption"
      >
        <template v-if="value || textView" class="FormSelect__select">
          {{ textView }}
        </template>
        <span v-if="!value || !textView" class="FormSelect__placeholder">
          {{ placeholder }}</span
        >
        <SvgAngle
          class="FormSelect__icon"
          :class="{ 'FormSelect__icon--rotate-180': optionsVisible }"
        />
      </button>
      <!-- Focus trap for iOS keyboard navigation. -->
      <input
        v-if="!tabKeyPressed"
        aria-hidden="true"
        class="u-visually-hidden"
        @focus="handleFocusTrap"
      />
    </div>
    <div v-show="optionsVisible" class="FormSelectOptions">
      <ul
        ref="options"
        tabindex="-1"
        role="listbox"
        :aria-labelledby="`${_uid}-label`"
        :aria-activedescendant="activeDescendant"
        class="FormSelectOptions__options"
        @focus="setupFocus"
        @keyup.up.prevent="selectPrevOption"
        @keyup.down.prevent="selectNextOption"
        @keydown="search"
        @keydown.up.down.prevent
        @keydown.enter.esc.prevent="reset"
      >
        <li
          v-for="(option, index) in options"
          :id="`${_uid}-option-${index}`"
          :key="option.label || option[textField] || option"
          :aria-selected="activeOptionIndex === index"
          :class="activeOptionIndex === index && 'has-focus'"
          class="FormSelectOptions__option"
          role="option"
          @click="handleOptionClick(option)"
        >
          {{ option.label || option[textField] || option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SvgAngle from './SvgAngle.vue'

let resetKeysSoFarTimer

export default {
  name: 'FormSelect',
  components: {
    SvgAngle
  },
  model: {
    event: 'change'
  },
  props: {
    valueField: {
      type: String,
      required: false,
      default: null
    },
    textField: {
      type: String,
      required: false,
      default: null
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Select'
    },
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      keysSoFar: '',
      tabKeyPressed: false,
      optionsVisible: false
    }
  },
  computed: {
    textView() {
      let text, object

      if (this.valueField && this.textField) {
        object = this.options.find(i => i[this.valueField] === this.value)
        if (object) {
          text = object[this.textField]
        }
      } else {
        text = this.options.find(i => i === this.value)
      }
      return text
    },
    activeOptionIndex() {
      return this.options.findIndex(x => {
        return (
          x.value === this.value ||
          x[this.valueField] === this.value ||
          x === this.value
        )
      })
    },
    prevOptionIndex() {
      const next = this.activeOptionIndex - 1
      return next >= 0 ? next : this.options.length - 1 || null
    },
    nextOptionIndex() {
      const next = this.activeOptionIndex + 1
      return next <= this.options.length - 1 ? next : 0
    },
    activeDescendant() {
      return `${this._uid}-option-${this.activeOptionIndex}`
    }
  },
  methods: {
    handleFocus(e) {
      // Fix IE11 quirks.
      if (e.target.tagName === 'DIV') return
      this.optionsVisible = true
    },
    handleOutsideFocus(e) {
      console.log(e)
      this.optionsVisible = false
    },
    handleFocusTrap(e) {
      this.optionsVisible = true
      this.$refs.button.focus()
    },
    handleOptionClick(option) {
      if (this.textField) {
        this.$emit('change', option[this.valueField])
      } else {
        this.$emit('change', option)
      }
      this.reset()
    },
    handleBlur(e) {
      if (this.$el.contains(e.relatedTarget)) return
      this.hideOptions()
    },
    toggleOptions() {
      // eslint-disable-next-line chai-friendly/no-unused-expressions
      this.optionsVisible ? this.hideOptions() : this.showOptions()
    },
    async showOptions() {
      this.optionsVisible = true
      await this.$nextTick()
      this.$refs.options.focus()
    },
    hideOptions() {
      this.optionsVisible = false
    },
    async reset() {
      this.hideOptions()
      await this.$nextTick()
      this.$refs.button.focus()
    },
    setupFocus() {
      if (this.value) return
      this.$emit('change', this.options.length >= 1 ? this.options[0] : null)
      if (this.valueField) {
        this.$emit(
          'change',
          this.options.length >= 1 ? this.options[0][this.valueField] : null
        )
      } else {
        this.$emit('change', this.options.length >= 1 ? this.options[0] : null)
      }
    },
    selectPrevOption() {
      const value = this.options[this.prevOptionIndex]
      if (this.valueField) {
        this.$emit('change', value[this.valueField])
      } else {
        this.$emit('change', value)
      }
    },
    selectNextOption() {
      const value = this.options[this.nextOptionIndex]
      if (this.valueField) {
        this.$emit('change', value[this.valueField])
      } else {
        this.$emit('change', value)
      }
    },
    search(e) {
      clearTimeout(resetKeysSoFarTimer)
      // No alphanumeric key was pressed.
      if (e.key.length > 1) return

      resetKeysSoFarTimer = setTimeout(() => {
        this.keysSoFar = ''
      }, 500)

      this.keysSoFar += e.key
      const matchingOption = this.options.find(x =>
        (x.value || x[this.textField] || x)
          .toLowerCase()
          .startsWith(this.keysSoFar)
      )

      if (!matchingOption) return
      if (this.valueField) {
        this.$emit('change', matchingOption[this.valueField])
      } else {
        this.$emit('change', matchingOption)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.u-visually-hidden {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

$placeholder-color: #b3b3b3;
$form-control-padding: 0.75rem;

@mixin form-control {
  display: block;
  padding: $form-control-padding;
  width: 100%;
  border: 1px solid #4d4d4d;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  transition: border-color 0.2s;
  line-height: 1;

  &:focus,
  &:focus-within,
  &--focus {
    border-color: #4d4d4d;
  }
}

.FormSelect {
  position: relative; // 1
  height: 37px; // 1
  color: #4d4d4d;
  font-size: 14px;
  vertical-align: center;
  &__control {
    @include form-control();
    color: #4d4d4d;
    position: relative;
    padding: 0;
  }

  &__button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: $form-control-padding;
    background-color: transparent;
    border: none;
    outline: none;
    height: 37px;
    color: #485057;
  }
  &__select {
    color: #485057;
  }

  &__placeholder {
    color: $placeholder-color;
  }

  &__icon {
    font-size: 14px;
    transition: transform 0.2s;
    color: #4d4d4d;
    &--rotate-180 {
      transform: rotate(180deg);
    }
  }
  .FormSelectOptions {
    margin-top: 2px;
    background: white;
    border-radius: 5px;
    border: 1px solid #4d4d4d;
    &__options {
      margin: 0;
      padding: 0;
      list-style-type: none;
      outline: none;
    }

    &__option {
      padding-bottom: 0.2rem !important;
      padding-top: 0.2rem !important;
      padding-left: $form-control-padding;
      padding-right: $form-control-padding;
      cursor: pointer;

      &.has-focus {
        background-color: #4d4d4d;
        color: white;
      }
    }
  }
}
</style>
