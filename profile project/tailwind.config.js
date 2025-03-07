tailwind.config={
    theme:{
        extend:{
                    //اینجا برای ستون های grid هست
        gridTemplateColumns:{
            'auto':'repeat(auto-fit,minmax(200px,1fr))'//توی اینجا یک ستون به نام auto داریم کهبه مرورگر میگوید تا جایی که ممکنه ستون ایجاد کنه
        },
        fontFamily:{
            Noto:["Noto Serif", 'serif'],
            Kanit:["Kanit", 'sans-serif']
        },
        animation:{
            spin_slow:'spin 6s linear infinite'
        },
        colors:{
            lightHover:'#fcf4ff',
            darkHover:'#2a004a',
            darkTheme:'#11001F'
        }
        }

        //اینکار به ما این اجازه رو میده که بتونیمقسمت عکس و کارت هارو responsive کنیم
    },
    darkMode:'selector'
}