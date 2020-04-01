import { Model } from '@vuex-orm/core'
import Todo from './Todo'

export default class User extends Model {
  static entity = 'users'

  static fields () {
    return {
      id: this.uid(),
      name: this.string(''),
      todos: this.hasMany(Todo, 'user_id')
    }
  }

  id!: string
  name!: string
  todos!: Todo[]
}
