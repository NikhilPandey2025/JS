const fetchdata = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/todo/1')
      const data = await api.json()
      console.log(data);

}
fetchdata()