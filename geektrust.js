



async function getData(){
    let res = await fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`)

    let data = await res.json()

    showData(data)

    console.log(data)

}
getData()


function showData(data){
    data.map((e)=>{
        let div = document.createElement('div')

        let p1 = document.createElement('p');
        p1.innerText = e.name

        let p2 = document.createElement('p');
        p2.innerText = e.email

        let p3 = document.createElement('p');
        p3.innerText = e.role

        div.append(p1,p2,p3)

        container.append(div)
    })
}


const searchFun = () => {
    let filter = document.getElementById("myInput").ariaValueMax.toUpperCase();
}