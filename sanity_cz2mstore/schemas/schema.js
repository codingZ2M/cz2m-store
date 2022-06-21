
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import bestselling from './bestselling';
import banner from './banner';
import promotional from './promotional';

export default createSchema({

  name: 'default',
  types: schemaTypes.concat([
   bestselling, banner,  promotional
  ]),
})
