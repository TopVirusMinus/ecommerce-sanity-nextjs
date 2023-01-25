import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'product',
  title: 'المنتج',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'صور',
      type: 'array',
      of: [defineArrayMember({type: 'image'})],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'name',
      title: 'اسم المنتج',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'معرف فريد',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    }),
    defineField({
      name: 'price',
      title: 'السعر',
      type: 'number',
    }),
    defineType({
      name: 'details',
      title: 'التفاصيل',
      type: 'string',
    }),
  ],
})
