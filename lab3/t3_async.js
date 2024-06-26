class HttpError extends Error 
{
    constructor(response) 
    {
       super(`${response.status} for ${response.url}`);
       this.name = 'HttpError';
       this.response = response;
    }
 }
 
 async function loadJson(url) 
 {
    const response = await fetch(url);
    if (!response.ok) 
    {
       throw new HttpError(response);
    }
    return await response.json();
 }
 
 async function getGithubUser() 
 {
    let name;
    do 
    {
       name = prompt("Введите логин?", "LaronovaID");
       try 
       {
          const user = await loadJson(`https://api.github.com/users/${name}`);
          alert(`Полное имя: ${user.name}`);
          return user;
       } 
       catch (err) 
       {
          if (err instanceof HttpError && err.response.status == 404) 
          {
             alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
          } else 
          {
             throw err;
          }
       }
    } 
    while (true);
 }
 
 // Пример использования:
 getGithubUser();