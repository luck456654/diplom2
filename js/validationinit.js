const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя не может быть менее 3 символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя не может быть боллее 30 символов',
    },
    {
        rule: 'required',
        errorMessage: 'Поле "Имя" не может быть пустым',
      },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Поле "Телефон" не может быть пустым',
    },
    {
        rule: 'minLength',
        value: 5,
        errorMessage: 'Поле "Телефон" не может быть менее 5 символов',
      },
      {
        rule: 'maxLength',
        value: 11,
        errorMessage: 'Поле "Телефон" не может быть боллее 11 символов',
      },
  ]);