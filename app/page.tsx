import Button from './components/button'

const SectionOne = () => {
  return (
    <section className="w-100 px-4 py-5 lg:py-8 lg:px-[75px] mt-12">

      <img className='absolute top-0 start-28 -z-50' src="/assets/image-one.webp" alt="image section 1" />
      <svg className='absolute -z-10 scale-150 top-0' width="320" height="472" viewBox="0 0 320 472" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="-7" y="-13" width="334" height="485" fill="url(#paint0_radial_20_650)" />
        <defs>
          <radialGradient id="paint0_radial_20_650" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(231.5 181) rotate(64.8733) scale(204.888 107.968)">
            <stop stop-color="#F1F4F5" stop-opacity="0.7" />
            <stop offset="1" stop-color="#F1F4F5" />
          </radialGradient>
        </defs>
      </svg>


      <div className="flex flex-col gap-9">
        <div>
          <p className="bg-white rounded-full px-4 py-2 inline-block text-sm font-medium">#EazyWithUs #KeepLearning</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-['ClashDisplay-Semibold'] text-5xl">Make Projects <span className="bg-gradient-to-br from-[#9C2CF4] to-[#2C57F4] text-transparent bg-clip-text">Easy With Us</span>.</h1>
          <p className="text-base font-medium text-seccondary">We provide various programming, website and application development and creation services for you. Speed up your project with us.</p>
        </div>
        <div className='flex flex-col gap-2'>
          <Button
            background="btn-primary"
            color="text-white"
            content={"Konsultasi"}
          />
          <Button
            background="bg-transparent"
            color="text-blue"
            content={
              <div className='flex justify-center gap-2'>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.87547 12.3143C7.66518 11.7958 7.28117 11.3666 6.78922 11.1002C6.29727 10.8338 5.72799 10.7467 5.17888 10.8538C4.62978 10.961 4.13502 11.2558 3.77934 11.6876C3.42366 12.1195 3.2292 12.6615 3.22927 13.221C3.22927 13.4687 3.1784 13.7137 3.07982 13.9409C2.98124 14.1681 2.83704 14.3727 2.65617 14.5418C2.47529 14.711 2.2616 14.8413 2.02832 14.9245C1.79505 15.0077 1.54717 15.0421 1.30005 15.0256C1.69751 15.7161 2.31179 16.256 3.04754 16.5616C3.78329 16.8672 4.59934 16.9213 5.36901 16.7156C6.13869 16.5099 6.81892 16.0559 7.30411 15.424C7.78931 14.7921 8.05232 14.0177 8.05232 13.221C8.05232 12.9003 7.98962 12.594 7.87547 12.3143ZM7.87547 12.3143C8.83125 11.9886 9.74536 11.5515 10.5989 11.012M6.54512 10.9919C6.87084 10.0341 7.30848 9.11812 7.84895 8.2629M10.5981 11.012C12.1225 10.0489 13.4272 8.77595 14.4276 7.27579L17.5433 2.60225C17.6626 2.42425 17.7165 2.21033 17.6957 1.99703C17.6748 1.78373 17.5806 1.58428 17.4291 1.43274C17.2775 1.28119 17.0781 1.18696 16.8648 1.16613C16.6515 1.14529 16.4375 1.19916 16.2595 1.31851L11.586 4.43501C10.0856 5.4351 8.8124 6.73957 7.84895 8.26371C9.07231 8.8107 10.0511 9.78948 10.5981 11.0128" stroke="#2C57F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>Portofolio</p>
              </div>
            } />
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <SectionOne />
    </>
  );
}