$( document ).on( "mobileinit", function() {
    
    $('#add_contact').on("click",addContact)
    $('#show_contact').on("click",showContact)
  
});

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

function addContact(){
try{db.transaction(function (tx,results) {
   tx.executeSql('CREATE TABLE IF NOT EXISTS CARPENTERS (id unique, name)');
   tx.executeSql('INSERT INTO CARPENTERS (id, name) VALUES (1, "Lee")');
   tx.executeSql('INSERT INTO CARPENTERS (id, name) VALUES (2, "Wong")');
   tx.executeSql('INSERT INTO CARPENTERS (id, name) VALUES (3, "Yap")');
   tx.executeSql('INSERT INTO CARPENTERS (id, name) VALUES (4, "Dan")');
   tx.executeSql('INSERT INTO CARPENTERS (id, name) VALUES (5, "Jog")');
});
}
catch(err){
    console.log(err);
}
}

function showContact(){
db.transaction(function (tx) {
   tx.executeSql('SELECT * FROM CARPENTERS', [], function (tx, results) {
      var len = results.rows.length, i;
      // msg = "<p>Found rows: " + len + "</p>";
      // document.querySelector('#status').innerHTML += msg ;
    
      for (i = 0; i < len; i++){
         // alert(results.rows.item(i).name );
         document.querySelector('#status').innerHTML += results.rows.item(i).name ;
         
      }
    
   }, null);
});
}

