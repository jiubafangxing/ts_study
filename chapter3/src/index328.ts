{
   let a = {
     b:1
   }
   a.b = 3
   let c :{d: number;}={
    d:2
   }
   c.d = 3
   const aa1 = 1
   let d :{
      firstName :string
      lastName :string
   } = {
     firstName:"f1",
     lastName:"l1"
   }

   class Person{

      constructor(
        public firstName:string,
        public lastName:string
      ){}
   }
   d = new Person("alice","wan")
   let dtype :{
    firstName :string
    lastName :string
   }
   dtype ={
     firstName:'a',
     lastName :'b'
  }


}