var name="Mahesh";
var name="mani";
var age=22;
var degree="BTech";
var info={
    name:"mahesh",
    age:22,
    degree:"BTech",
    from:"kotapadu"
}
console.log(name);
console.log(age);
console.log(degree);
console.log(info);



//object method
var mom={
    age:40,
    name:"koteswaramma",
    occ:"house wife",
    children:{
        me:{
            name:"Mahesh",
            age:22
        },
        younger_bro:{
            name:"anil",
            age:19
        }
    }
}
var dad={
    name:"Murthy",
    age:40,
    occ:"farmer",
    children:{
        me:{
            name:"Mahesh",
            age:22
        },
        younger_bro:{
            name:"anil",
            age:19
        }
    }
}


//array method
var details=[
    mom={
        age:40,
        name:"koteswaramma",
        occ:"house wife",
        children:{
        me:{
            name:"Mahesh",
            age:22
        },
        younger_bro:{
            name:"anil",
            age:19
        }
    }
    },
    dad={
        name:"Murthy",
        age:40,
        occ:"farmer",
        children:{
        me:{
            name:"Mahesh",
            age:22
        },
        younger_bro:{
            name:"anil",
            age:19
        }
    }
    }
]
console.log(details);




//premitive data types are immutable
var l=10;
var m=l;
m=m+10
console.log(l);
console.log(m);


//non premitive data types are mutable
var n={
    nam:"mahesh",
    age:22
}
o=n;
n.name="msd"
console.log(n);
console.log(o);

var a=[5,10];
var b=a;
b[0]=20;
console.log(a);
console.log(b);




// Call By value (primitives)
var a = 5;
var b=a;
console.log(a);
console.log(b);


//Call By Reference(Non-Premitives)
let c = {greeting:'welcome'};
let d=c;
c.greetin='welcome to Mahesh'
console.log(c);
console.log(d);

var e=[1,2,3];
var f=e;
f[0]=5;
console.log(e);
console.log(f);




