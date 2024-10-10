let docs = [
  'instruction',
  {
    type: 'category',
    label: 'Вантажі',
    items: [
      'cargo/dictionary',
      'cargo/manufacturing-materials',
      'cargo/products',
      'cargo/brands'
    ]
  },
  {
    type: 'category',
    label: 'Заборона',
    items: [
      'prohibition/conditions',
      'prohibition/cargo-analysis',
      'prohibition/additional-rules'
    ]
  },
  {
    type: 'category',
    label: 'Користувачі та компанії',
    items: [
      'users-and-companies/users',
      'users-and-companies/companies',
      'users-and-companies/groups',
      'users-and-companies/products'
    ]
  },
  {
    type: 'category',
    label: 'API',
    items: [
      'api/api-users',
      'api/methods',
      'api/projects'
    ]
  },
  {
    type: 'category',
    label: 'Платформа',
    items: [
      'platform/languages-of-translations',
      'platform/customs-directory',
      'platform/countries'
    ]
  }
]

module.exports = {
  docs
}