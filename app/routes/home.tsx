// import type { Route } from "./+types/home";
// import Navbar from '~/components/navbar';
// import { resumes } from '../../constants';
// import ResumeCard from "~/components/ResumeCard";
// import { usePuterStore } from '~/lib/puter';
// import { useLocation, useNavigate } from 'react-router';
// import { useEffect } from 'react';
// // import { Welcome } from "../welcome/welcome";
//
// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Resumind" },
//     { name: "description", content: "Smart feedback for your dream job!" },
//   ];
// }
//
//
//
// // export default function Home() {
// //   const {  auth } = usePuterStore();
// //   const navigate = useNavigate();
// //   useEffect((): void => {
// //     if (!auth.isAuthenticated) navigate('/auth?next=/');
// //   }, [auth.isAuthenticated]);
// export default function Home() {
//   const { auth } = usePuterStore();
//   const navigate = useNavigate();
//   const location = useLocation();
//
//   useEffect(() => {
//     if (!auth.isAuthenticated) {
//       navigate(`/auth?next=${location.pathname}`);
//     }
//   }, [auth.isAuthenticated, location.pathname, navigate]);
//
//   return (...);
// }
//
//
//   return (
//     <main className="bg-[url('public/fonts/images/bg-main.svg')] bg-cover">
//       <Navbar />
//       <section className={'main-section'}>
//         <div className="page-heading py-16">
//           <h1>Track Your Application & Resume Ratings</h1>
//           <h2>Review your submission and check AI-powered feedback</h2>
//         </div>
//
//         {resumes.length > 0 && (
//           <div className="resumes-section">
//             {resumes.map((resume) => (
//               <ResumeCard key={resume.id} resume={resume} />
//             ))}
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }


import type { Route } from './+types/home';
import Navbar from '~/components/navbar';
import { resumes } from '../../constants';
import ResumeCard from '~/components/ResumeCard';
import { usePuterStore } from '~/lib/puter';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resumind' },
    { name: 'description', content: 'Smart feedback for your dream job!' },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate(`/auth?next=${location.pathname}`);
    }
  }, [auth.isAuthenticated, location.pathname, navigate]);

  return (
    <main className="bg-[url('public/fonts/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Application & Resume Ratings</h1>
          <h2>Review your submission and check AI-powered feedback</h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

