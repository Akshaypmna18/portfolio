import Link from 'next/link'

function Footer() {
  return (
    <footer className="text-center mb-4 mt-12 px-4">
      <small>
        &copy; {new Date().getFullYear()} · Designed and Developed by{" "}
        <big>
          <Link href="/" className="text-primaryColor italic hover:underline">Akshay K </Link>
        </big>
        · All Rights Reserved
      </small>
    </footer>
  );
}

export default Footer;
