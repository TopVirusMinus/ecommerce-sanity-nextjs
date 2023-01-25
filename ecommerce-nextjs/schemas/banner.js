export default {
  name: 'banner',
  title: 'لوحه التخفيضات',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'الصوره',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttonText',
      title: 'كلمات الزر',
      type: 'string',
    },
    {
      name: 'product',
      title: 'المنتج',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'وصف المنتج',
      type: 'string',
    },
    {
      name: 'smallText',
      title: 'كتابه صغيره',
      type: 'string',
    },
    {
      name: 'midText',
      title: 'كتابه متوسطه',
      type: 'string',
    },
    {
      name: 'largeText1',
      title: 'كتابه كبيره 1',
      type: 'string',
    },
    {
      name: 'largeText2',
      title: 'كتابه كبيره 2',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'التخفيض',
      type: 'string',
    },
    {
      name: 'saleTime',
      title: 'مده التخفيض',
      type: 'string',
    },
  ],
}
