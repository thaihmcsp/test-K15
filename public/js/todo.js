async function createJob() {
  try {
    const name = $("#name").val();
    const status = $("#status").val();
    const deadline = $("#deadline").val();
    const description = $("#description").val();
    const res = await $.ajax({
      url: "/todo",
      type: "POST",
      data: { name, status, description, deadline },
    });
    $(".listData").html(res);
  } catch (error) {
    console.log(error);
  }
}

// async function render() {
//   try {
//     const data = await $.ajax({
//       url: "/todo/all",
//       type: "GET",
//     });

//     if (data.status === 200) {
//       $(".todo-list").html("");
//       $(".doing-list").html("");
//       $(".done-list").html("");
//       for (let i = 0; i < data.list.length; i++) {
//         console.log(data.list[i].name);
//         const div = `
//         <div class='job'>
//           <div>${data.list[i].name}</div>
//           <div>${data.list[i].description}</div>
//           <div>${data.list[i].deadline}</div>
//         </div>
//         `;
//         $(`.${data.list[i].status}-list`).append(div);
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// render();
