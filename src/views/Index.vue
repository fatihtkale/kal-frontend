<template>
  <div>
    <div class="relative w-full lg:h-[600px] py-24 lg:py-0 mt-10 lg:overflow-x-hidden">
      <div class="content lg:flex items-center justify-between">
        <div class="lg:mr-80">
          <h1 class="font-mulish font-bold text-[35px] lg:text-[40px] text-slate-900 leading-tight">Få styr på tiden med et dynamisk <span class="text-primary-Darker">kalender</span></h1>
          <p class="mt-5 text-gray-500 font-light">Optimer din tid og øg din produktivitet med vores dynamiske kalendersystem. Oplev den nemme og effektive måde at planlægge din tid på og få styr på dine opgaver og aftaler.</p>
          <div class="flex mt-5 lg:mt-14 gap-x-4">
            <RouterLink to="/login" class="lg:py-[13px] py-4 px-6 bg-primary text-white lg:px-10 font-bold font-mulish rounded-full leading-none hover:bg-primary-Darker hover-transition">Opret konto</RouterLink>
            <RouterLink to="/login" class="lg:py-[13px] py-4 px-6 bg-gray-700 text-white lg:px-10 font-bold font-mulish rounded-full leading-none hover:bg-gray-800 hover-transition">Vis prøveversion</RouterLink>
          </div>
        </div>
        <div class="opacity-90 lg:h-[500px] lg:w-[500px] hidden lg:block">
          <img src="@/assets/images/frontpage/booking_menu.png" class="w-[800px] top-0 absolute right-[-400px]" />
          <img src="@/assets/images/frontpage/booking_cut.jpg" class="w-[800px] lg:top-[80px] top-[310px] absolute right-[-400px] border border-gray-200" />
        </div>
      </div>
    </div>

    <div class="w-full relative bg-white py-20">
      <div class="text-center">
        <div class="font-mulish font-medium text-primary-Darker1"><span class="font-bold">2.643</span> virksomheder bruger allerede Kal2 idag</div>
        <div class="font-mulish font-semibold text-[40px] text-slate-900 leading-tight">Kalender til at alle brancher</div>
      </div>
      <div class="calendar-content">
        <div class="grid lg:grid-cols-4 px-5 gap-4 mt-10">
          <div class="hover-transition lg:hover:scale-[102%]">
            <img src="@/assets/images/frontpage/services/plumber.jpeg" class="w-full rounded-t-md" alt="plumber service" />
            <div class="w-full bg-gray-700 text-white text-center font-mulish rounded-b-md py-3">Håndværkere & service</div>
          </div>
          <div class="hover-transition lg:hover:scale-[102%]">
            <img src="@/assets/images/frontpage/services/store.jpg" class="w-full rounded-t-md" alt="store" />
            <div class="w-full bg-gray-700 text-white text-center font-mulish rounded-b-md py-3">Butikker</div>
          </div>
          <div class="hover-transition lg:hover:scale-[102%]">
            <img src="@/assets/images/frontpage/services/fitness.jpg" class="w-full rounded-t-md" alt="fitness" />
            <div class="w-full bg-gray-700 text-white text-center font-mulish rounded-b-md py-3">Instruktører & terapeuter</div>
          </div>
          <div class="hover-transition lg:hover:scale-[102%]">
            <img src="@/assets/images/frontpage/services/consulting.jpg" class="w-full rounded-t-md" alt="consulting" />
            <div class="w-full bg-gray-700 text-white text-center font-mulish rounded-b-md py-3">Konsulenter og rådgivere</div>
          </div>
        </div>
        <div class="lg:flex justify-between items-center mt-5 lg:mt-14 px-5 lg:px-0">
          <p class="text-gray-500 leading-[28px] text-[14px] font-light text-center lg:text-left lg:w-8/12">Kal2 tilpasses til de specifikke behov for enhver branche. For eksempel kan et kalendersystem til sundhedssektoren indeholde funktioner til at planlægge patientaftaler og behandlinger, mens et kalendersystem til detailhandlen kan have funktioner til at planlægge salgskampagner og markedsføringsbegivenheder.</p>
          <div class="flex justify-center mt-5 lg:mt-0 lg:block">
            <RouterLink to="#" class="py-[13px] bg-primary text-white px-10 font-bold font-mulish rounded-full inline-flex lg:flex items-center leading-none hover:bg-primary-Darker hover-transition">Se flere brancher <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 ml-1"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full relative py-20">
      <div class="calendar-content">
        <div class="font-mulish font-semibold text-[40px] text-slate-900 leading-tight text-center">Udsnit af det <span class="text-primary-Darker font-bold">funktionelle</span></div>
        <div class="grid lg:grid-cols-3 gap-5 lg:gap-y-20 lg:mt-14 px-2 lg:px-0 mt-5 flex-1">
          <div class="flex items-center hover:bg-white hover-transition hover:shadow-md p-2 border border-gray-50 hover:border hover:border-gray-200" v-for="(icon) in functionsIcons" :key="icon">
            <img :src="require(`../assets/images/frontpage/icons/${icon.icon}`)" class="w-16">
            <div class="ml-5">
              <div class="w-full mt-2 text-[15px] text-gray-800 font-bold font-mulish rounded-b-md">{{ icon.title }}</div>
              <p class="text-gray-500 leading-[28px] text-[14px] font-light lg:w-9/12">{{ icon.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-white lg:py-32">
      <div class="content">
        <div class="flex flex-col lg:flex-row items-center gap-x-[125px] justify-between">
          <div class="w-[150px] h-[150px] lg:w-[350px] lg:h-[350px] bg-primary/20 rounded-full flex items-center justify-center relative">
            <img src="@/assets/images/frontpage/phone.png" class="w-[100px] lg:w-[200px]"/>
          </div>
          <div class="flex-1 mt-16 lg:mt-0 text-center lg:text-left">
            <h3 class="font-mulish font-bold text-[25px] lg:text-[40px] text-slate-900 leading-tight">Dine opgaver løber, hold styr på dem, selv på farten.</h3>
            <p class="mt-5 text-gray-500 font-light">Med vores app kan du holde styr på opgaverne selv når du på farten. Medarbejdere kan registrer deres ankomst og afslutning, tage billeder, kommenterer på opgaver og meget mere.</p>
            <div class="flex justify-center lg:justify-start items-center mt-2 lg:mt-10 gap-x-3">
              <RouterLink to="#" class="hover:opacity-75 hover-transition"><img src="@/assets/images/frontpage/appstore.svg" class="w-32"/></RouterLink>
              <RouterLink to="#" class="hover:opacity-75 hover-transition"><img src="@/assets/images/frontpage/googleplay.png" class="w-40"/></RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const functionsIcons = [
    { icon: 'calendar.png', title: 'Avanceret kalender', text: 'Kalender udviklet til at udfylde dine behov på en smart, nem og hurtig måde.' },
    { icon: 'clock.png', title: 'Tidsregistering', text: 'Registerer tiden på opgaverne, med evt. billeder og kommentar, via vores kal2 app.' },
    { icon: 'folder.png', title: 'Dynamisk kartotek', text: 'Opret og udregn data på alle dine aktiver med vores dynamiske kartotek.' },
    { icon: 'invoice.png', title: 'Automatiske faktuering', text: 'Send automatisk fakturaer til dine kunder (Dinero, e-conomic, billy mm.).' },
    { icon: 'sms.png', title: 'Automatiske beskeder', text: 'Send automatisk mails eller SMS til dine kunder, med kun et par simple steps.' },
    { icon: 'task.png', title: 'Opgavestyting', text: 'Håndter dine opgaver på en smart måde med en søgning på ny form.' },
  ];
</script>