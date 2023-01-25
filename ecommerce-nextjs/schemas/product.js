export default {
  name: 'product',
  title: 'المنتج',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'صور',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'اسم المنتج',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'معرف فريد',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'السعر',
      type: 'number',
    },
    {
      name: 'details',
      title: 'التفاصيل',
      type: 'string',
    },
  ],
}
