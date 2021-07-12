export const createSlug = slug => {
  slug = slug
    .replace(/[`~!@#$%^&*()_\-+=[\]{};:'"\\|/,.<>?\s]/g, ' ')
    .toLowerCase()
  slug = slug.replace(/^\s+|\s+$/gm, '')

  return slug.replace(/\s+/g, '_')
}

export const example = () => {
  const filters = {
    brands: [],
    models: [],
    carClassesDerco: [],
    transmision: [],
    precioMinimo: 0,
    precioMaximo: 100
  }
  const newModels = []
  filters.brands.map(brand => {
    const models = filters.models.filter(item => {
      return item.brand_slug === brand
    })
    newModels.push(models)
  })
  const newCategorias = []
  newModels.map(nM => {
    const model = filters.models.find(m => m.slug === nM)

    filters.carClassesDerco
      .filter(ct => ct.slug === createSlug(model.carClassDerco))
      .map(cTF => {
        const cF = newCategorias.find(nC => nC.slug === cTF.slug)
        if (!cF) {
          newCategorias.push(cTF)
        }
      })
  })

  return { newModels, newCategorias }
}
