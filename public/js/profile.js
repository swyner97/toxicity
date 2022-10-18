
document.querySelector('#createprofile').addEventListener('submit', (e) => {
    e.preventDefault()
    const needed_funding = document.querySelector('#neededFunding').value 
    const name = document.querySelector('#name').value 
    const description =document.querySelector('#description').value
    console.log(needed_funding,name,description)
    
    fetch('/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'

        },
        body:JSON.stringify({
            needed_funding,name,description
        })

    }).then((res) =>{
        return res.json()

    }).then((data) =>{
        console.log(data)
        window.location.replace('/profile')
    })
});
document.querySelector('button').addEventListener('click',(event)=>{
    e.preventDefault()
    console.log(e.target.id)
    fetch('/api/projects'+ e.target.id, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'

        },
    }).then((res) =>{
        return res.json()

    }).then((data) =>{
        console.log(data)
        window.location.replace('/profile')
        })
})