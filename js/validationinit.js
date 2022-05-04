const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Недопустимый формат',
    },
    {
        rule: 'required',
        errorMessage: 'Недопустимый формат',
      },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат',
    },
    {
        rule: 'minLength',
        value: 5,
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'maxLength',
        value: 11,
        errorMessage: 'Недопустимый формат',
      },
  ]);