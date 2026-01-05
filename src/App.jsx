import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import CloudAchievements from './pages/achievements/Cloud';
import DevOpsAchievements from './pages/achievements/DevOps';
import CloudDevOpsGitOpsAchievements from './pages/achievements/CloudDevOpsGitOps';
import TestAutomationAchievements from './pages/achievements/TestAutomation';
import PerformanceAchievements from './pages/achievements/Performance';
import AIAchievements from './pages/achievements/AI';
import LeadershipAchievements from './pages/achievements/Leadership';

import Achievements from './pages/Achievements';
import ClientEngagements from './pages/ClientEngagements';
import ParticleBackground from './components/ParticleBackground';

// wrapper to scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    return (
        <Router>
            <ParticleBackground />
            <ScrollToTop />
            <div className="relative z-0 min-h-screen">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="experience" element={<Experience />} />
                        <Route path="education" element={<Education />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="achievements" element={<Achievements />} />
                        <Route path="client-engagements" element={<ClientEngagements />} />

                        {/* Achievement Routes */}
                        <Route path="achievements/cloud" element={<CloudAchievements />} />
                        <Route path="achievements/devops" element={<DevOpsAchievements />} />
                        <Route path="achievements/devops-gitops" element={<CloudDevOpsGitOpsAchievements />} />
                        <Route path="achievements/test-automation" element={<TestAutomationAchievements />} />
                        <Route path="achievements/performance" element={<PerformanceAchievements />} />
                        <Route path="achievements/ai" element={<AIAchievements />} />
                        <Route path="achievements/leadership" element={<LeadershipAchievements />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
