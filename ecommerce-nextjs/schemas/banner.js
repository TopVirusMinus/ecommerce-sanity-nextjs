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
      title: 'اسم المنتج',
      type: 'string',
    }),
    defineField({
      name: 'smallText',
      title: '',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'وصف المنتج',
      type: 'string',
    }),
    defineField({
      name: 'midText',
      title: 'كتابه متوسطه',
      type: 'string',
    }),
    defineField({
      name: 'largeText1',
      title: 'التخفيض',
      type: 'string',
    }),
  ],
})
