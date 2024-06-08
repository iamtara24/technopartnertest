import React, { useEffect } from 'react';

const MobileWarning = () => {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const warningElement = document.getElementById('mobile-warning');

      if (width <= 768) {
        // Sembunyikan pesan peringatan jika lebar layar di atas 768px
        warningElement.style.display = 'none';
      } else {
        // Tampilkan pesan peringatan jika lebar layar di bawah atau sama dengan 768px
        warningElement.style.display = 'block';
      }
    };

    // Panggil handleResize saat halaman dimuat dan saat ukuran layar berubah
    handleResize();
    window.addEventListener('resize', handleResize);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="mobile-warning" style={{ display: 'none', textAlign: 'center', padding: '10px', backgroundColor: 'yellow' }}>
      Please open this application in mobile view for a better experience.
    </div>
  );
};

export default MobileWarning;
