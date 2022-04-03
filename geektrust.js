async function getList(){
    let res = await fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`)

    let myList = await res.json()

    showList(myList)

    console.log(myList)

}
getList()


function showList(myList){
    myList.map((e)=>{
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

    let filter = document.getElementById('myInput').value.toUpperCase();

    let myTable = document.getElementById('myTable');
    
    let tr = myTable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];

        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

    
function showList(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''


    for (var i = 0; i < data.length; i++){
        var colname = `name-${i}`
        var colemail = `email-${i}`
        var colrole = `role-${i}`

        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].role}</td>
                   </tr>`
        table.innerHTML += row
    }
}