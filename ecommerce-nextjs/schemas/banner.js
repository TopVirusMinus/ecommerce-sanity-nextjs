import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'banner',
  title: 'لوحه التخفيضات',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'الصوره',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'buttonText',
      title: 'كلمات الزر',
      type: 'string',
    }),
    defineField({
      name: 'product',
      title: 'المنتج',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'وصف المنتج',
      type: 'string',
    }),
    defineField({
      name: 'smallText',
      title: 'كتابه صغيره',
      type: 'string',
    }),
    defineField({
      name: 'midText',
      title: 'كتابه متوسطه',
      type: 'string',
    }),
    defineField({
      name: 'largeText1',
      title: 'كتابه كبيره 1',
      type: 'string',
    }),
    defineField({
      name: 'largeText2',
      title: 'كتابه كبيره 2',
      type: 'string',
    }),
    defineField({
      name: 'discount',
      title: 'التخفيض',
      type: 'string',
    }),
    defineField({
      name: 'saleTime',
      title: 'مده التخفيض',
      type: 'string',
    }),
  ],
})
