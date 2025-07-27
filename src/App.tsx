
import React, { useState, useEffect } from 'react';

const BACKEND_URL = 'http://localhost:8000';

interface AnalysisResults {
  architecture_flow?: any;
  mind_map?: any;
  code_quality?: any;
  security?: any;
  performance?: any;
}

function App() {
  const [repoUrl, setRepoUrl] = useState('');
  const [jobId, setJobId] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isLoading, setIsLoading] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState<{[key: string]: string}>({});

  // Load saved results from localStorage on component mount
  useEffect(() => {
    const savedResults = localStorage.getItem('repoAnalysisResults');
    const savedRepoUrl = localStorage.getItem('repoAnalysisUrl');
    if (savedResults && savedRepoUrl) {
      try {
        setResults(JSON.parse(savedResults));
        setRepoUrl(savedRepoUrl);
        setActiveTab('overview');
      } catch (e) {
        console.error('Failed to load saved results:', e);
      }
    }
  }, []);

  // Save results to localStorage whenever they change
  useEffect(() => {
    if (results) {
      localStorage.setItem('repoAnalysisResults', JSON.stringify(results));
      localStorage.setItem('repoAnalysisUrl', repoUrl);
    }
  }, [results, repoUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!repoUrl.trim()) {
      setError('Please enter a valid GitHub repository URL');
      return;
    }
    
    setError(null);
    setResults(null);
    setStatus('queued');
    setProgress(0);
    setJobId(null);
    setActiveTab('overview');
    setIsLoading(true);
    setAnalysisProgress({});
    
    // Clear old results from localStorage
    localStorage.removeItem('repoAnalysisResults');
    localStorage.removeItem('repoAnalysisUrl');
    
    try {
      const res = await fetch(`${BACKEND_URL}/summarize-repo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repo_url: repoUrl }),
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      setJobId(data.job_id);
      setStatus(data.status);
    } catch (err) {
      setError('Failed to start analysis. Please check your connection and try again.');
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (!jobId) return;
    
    setResults(null);
    setError(null);
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/summary-status?job_id=${jobId}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        setStatus(data.status);
        setProgress(data.progress || 0);
        
        // Update analysis progress
        if (data.analysis_progress) {
          setAnalysisProgress(data.analysis_progress);
        }
        
        if (data.status === 'done') {
          clearInterval(interval);
          setIsLoading(false);
          try {
            const sumRes = await fetch(`${BACKEND_URL}/get-summary?job_id=${jobId}`);
            if (!sumRes.ok) {
              throw new Error(`HTTP error! status: ${sumRes.status}`);
            }
            const sumData = await sumRes.json();
            setResults(sumData.summary);
          } catch (err) {
            setError('Failed to fetch analysis results. Please try again.');
          }
        } else if (data.status === 'error') {
          clearInterval(interval);
          setIsLoading(false);
          setError(data.error || 'Analysis failed. Please try again.');
        }
      } catch (err) {
        clearInterval(interval);
        setIsLoading(false);
        setError('Failed to fetch status. Please check your connection.');
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [jobId]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'done': return '#10b981';
      case 'error': return '#ef4444';
      case 'analyzing': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'queued': return 'Queuing analysis...';
      case 'cloning': return 'Cloning repository...';
      case 'analyzing': return 'Running 5 AI analyses in parallel...';
      case 'done': return 'Analysis complete!';
      case 'error': return 'Analysis failed';
      default: return 'Processing...';
    }
  };

  const renderOverview = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
      {results?.architecture_flow && (
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }} 
        onClick={() => setActiveTab('architecture')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem' }}>🏗️ Architecture Flow</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Execution flow and system architecture analysis</p>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            Click to view detailed analysis →
          </div>
        </div>
      )}
      
      {results?.mind_map && (
        <div style={{ 
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }} 
        onClick={() => setActiveTab('mindmap')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem' }}>🧠 Mind Map</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Visual structure and component relationships</p>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            Click to view detailed analysis →
          </div>
        </div>
      )}
      
      {results?.code_quality && (
        <div style={{ 
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }} 
        onClick={() => setActiveTab('quality')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem' }}>✨ Code Quality</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Code quality and maintainability assessment</p>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            Click to view detailed analysis →
          </div>
        </div>
      )}
      
      {results?.security && (
        <div style={{ 
          background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }} 
        onClick={() => setActiveTab('security')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem' }}>🔒 Security</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Security analysis and vulnerability assessment</p>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            Click to view detailed analysis →
          </div>
        </div>
      )}
      
      {results?.performance && (
        <div style={{ 
          background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
          color: '#374151',
          padding: '1.5rem',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }} 
        onClick={() => setActiveTab('performance')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem' }}>⚡ Performance</h3>
          <p style={{ margin: 0, opacity: 0.8 }}>Performance analysis and optimization insights</p>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
            Click to view detailed analysis →
          </div>
        </div>
      )}

      {!results && (
        <div style={{ 
          gridColumn: '1 / -1',
          textAlign: 'center',
          padding: '3rem',
          color: '#6b7280',
          fontSize: '1.1rem'
        }}>
          No analysis results available. Start by analyzing a repository above.
        </div>
      )}
    </div>
  );

  const renderArchitectureFlow = () => {
    const arch = results?.architecture_flow;
    if (!arch) return <div>No architecture data available</div>;
    
    return (
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#374151' }}>
          🏗️ Architecture Flow Analysis
        </h3>
        
        {arch.entry_points && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Entry Points</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {arch.entry_points.map((point: string, index: number) => (
                <span key={index} style={{ 
                  background: '#667eea', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}>
                  {point}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {arch.execution_flow && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Execution Flow</h4>
            <div style={{ 
              background: '#f0f9ff', 
              border: '1px solid #bae6fd',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <p style={{ margin: 0, lineHeight: '1.6', color: '#0c4a6e' }}>{arch.execution_flow}</p>
            </div>
          </div>
        )}
        
        {arch.component_interactions && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Component Interactions</h4>
            <ul style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '12px' }}>
              {arch.component_interactions.map((interaction: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem', color: '#374151' }}>{interaction}</li>
              ))}
            </ul>
          </div>
        )}
        
        {arch.architecture_pattern && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Architecture Pattern</h4>
            <div style={{ 
              background: '#fef3c7', 
              border: '1px solid #fcd34d',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <p style={{ margin: 0, color: '#92400e' }}>{arch.architecture_pattern}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderMindMap = () => {
    const mindMap = results?.mind_map;
    if (!mindMap) return <div>No mind map data available</div>;
    
    return (
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#374151' }}>
          🧠 Mind Map Structure
        </h3>
        
        {mindMap.central_concept && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Central Concept</h4>
            <div style={{ 
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>{mindMap.central_concept}</p>
            </div>
          </div>
        )}
        
        {mindMap.major_branches && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Major Branches</h4>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {mindMap.major_branches.map((branch: any, index: number) => (
                <div key={index} style={{ 
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '1.5rem'
                }}>
                  <h5 style={{ margin: '0 0 0.5rem 0', color: '#374151', fontSize: '1.1rem' }}>
                    {branch.name}
                  </h5>
                  <p style={{ margin: '0 0 0.5rem 0', color: '#6b7280' }}>{branch.description}</p>
                  {branch.sub_branches && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {branch.sub_branches.map((sub: string, subIndex: number) => (
                        <span key={subIndex} style={{ 
                          background: '#f3f4f6', 
                          color: '#374151', 
                          padding: '0.25rem 0.5rem', 
                          borderRadius: '4px',
                          fontSize: '0.8rem'
                        }}>
                          {sub}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderCodeQuality = () => {
    const quality = results?.code_quality;
    if (!quality) return <div>No code quality data available</div>;
    
    return (
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#374151' }}>
          ✨ Code Quality Analysis
        </h3>
        
        {quality.overall_score && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Overall Score</h4>
            <div style={{ 
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>{quality.overall_score}/10</div>
            </div>
          </div>
        )}
        
        {quality.strengths && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Strengths</h4>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.5rem' }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                {quality.strengths.map((strength: string, index: number) => (
                  <li key={index} style={{ marginBottom: '0.5rem', color: '#166534' }}>{strength}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {quality.improvements && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Areas for Improvement</h4>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '1.5rem' }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                {quality.improvements.map((improvement: string, index: number) => (
                  <li key={index} style={{ marginBottom: '0.5rem', color: '#dc2626' }}>{improvement}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {quality.recommendations && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Recommendations</h4>
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '12px', padding: '1.5rem' }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                {quality.recommendations.map((rec: string, index: number) => (
                  <li key={index} style={{ marginBottom: '0.5rem', color: '#92400e' }}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSecurity = () => {
    const security = results?.security;
    if (!security) return <div>No security data available</div>;
    
    return (
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#374151' }}>
          🔒 Security Analysis
        </h3>
        
        {/* Security Overview */}
        {security.security_overview && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Security Overview</h4>
            <div style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '12px'
            }}>
              {security.security_overview}
            </div>
          </div>
        )}
        
        {/* Overall Risk Level - Make it prominent */}
        {security.overall_risk && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>🚨 Overall Risk Level</h4>
            <div style={{ 
              background: security.overall_risk === 'CRITICAL' ? '#dc2626' : 
                         security.overall_risk === 'HIGH' ? '#ea580c' :
                         security.overall_risk === 'MEDIUM' ? '#d97706' : '#16a34a',
              color: 'white',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              {security.overall_risk} RISK
            </div>
          </div>
        )}
        
        {/* CRITICAL ISSUES - Make them the most prominent */}
        {security.critical_issues && security.critical_issues.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#dc2626', fontWeight: 'bold' }}>
              ⚠️ CRITICAL SECURITY ISSUES
            </h4>
            <div style={{ background: '#fef2f2', border: '2px solid #dc2626', borderRadius: '12px', padding: '1.5rem' }}>
              {security.critical_issues.map((issue: any, index: number) => (
                <div key={index} style={{ 
                  marginBottom: '1.5rem', 
                  padding: '1rem', 
                  background: 'white', 
                  borderRadius: '8px',
                  border: '1px solid #fecaca'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '0.5rem',
                    color: '#dc2626',
                    fontWeight: 'bold'
                  }}>
                    <span style={{ marginRight: '0.5rem' }}>
                      {issue.severity === 'HIGH' ? '🔴' : issue.severity === 'MEDIUM' ? '🟡' : '🟢'}
                    </span>
                    {issue.severity} SEVERITY
                  </div>
                  <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>{issue.issue}</div>
                  <div style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
                    <strong>Impact:</strong> {issue.impact}
                  </div>
                  <div style={{ color: '#059669', fontWeight: 'bold' }}>
                    <strong>Fix:</strong> {issue.fix}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Immediate Actions */}
        {security.immediate_actions && security.immediate_actions.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#d97706' }}>
              🚀 Immediate Actions Required
            </h4>
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '12px', padding: '1.5rem' }}>
              <ol style={{ margin: 0, paddingLeft: '1.5rem' }}>
                {security.immediate_actions.map((action: string, index: number) => (
                  <li key={index} style={{ marginBottom: '0.5rem', color: '#92400e', fontWeight: 'bold' }}>
                    {action}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
        
        {/* Security Score */}
        {security.security_score && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Security Score</h4>
            <div style={{ 
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>{security.security_score}/10</div>
            </div>
          </div>
        )}
        
        {/* Security Strengths */}
        {security.security_strengths && security.security_strengths.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>✅ Security Strengths</h4>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.5rem' }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                {security.security_strengths.map((strength: string, index: number) => (
                  <li key={index} style={{ marginBottom: '0.5rem', color: '#166534' }}>{strength}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {/* Authentication Status */}
        {security.authentication_status && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>🔐 Authentication</h4>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem' }}>
              {security.authentication_status}
            </div>
          </div>
        )}
        
        {/* Data Protection */}
        {security.data_protection && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>🛡️ Data Protection</h4>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem' }}>
              {security.data_protection}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderPerformance = () => {
    const performance = results?.performance;
    if (!performance) return <div>No performance data available</div>;
  
  return (
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#374151' }}>
          ⚡ Performance Analysis
        </h3>
        
        {performance.performance_score && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Performance Score</h4>
            <div style={{ 
              background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
              color: '#374151',
              padding: '1.5rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>{performance.performance_score}/10</div>
            </div>
          </div>
        )}
        
        {performance.bottlenecks && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Performance Bottlenecks</h4>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '1.5rem' }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                {performance.bottlenecks.map((bottleneck: string, index: number) => (
                  <li key={index} style={{ marginBottom: '0.5rem', color: '#dc2626' }}>{bottleneck}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {performance.optimization_opportunities && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Optimization Opportunities</h4>
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '12px', padding: '1.5rem' }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                {performance.optimization_opportunities.map((opp: string, index: number) => (
                  <li key={index} style={{ marginBottom: '0.5rem', color: '#92400e' }}>{opp}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {performance.recommendations && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#374151' }}>Performance Recommendations</h4>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.5rem' }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                {performance.recommendations.map((rec: string, index: number) => (
                  <li key={index} style={{ marginBottom: '0.5rem', color: '#166534' }}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'architecture': return renderArchitectureFlow();
      case 'mindmap': return renderMindMap();
      case 'quality': return renderCodeQuality();
      case 'security': return renderSecurity();
      case 'performance': return renderPerformance();
      default: return renderOverview();
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header */}
      <header style={{ 
        background: 'rgba(255, 255, 255, 0.1)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ 
            color: 'white', 
            margin: 0, 
            fontSize: '2rem', 
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            🚀 RepoAnalyzer Pro
          </h1>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.8)', 
            textAlign: 'center', 
            margin: '0.5rem 0 0 0',
            fontSize: '1.1rem'
          }}>
            Multi-API AI-Powered Repository Analysis
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        {/* Hero Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          color: 'white'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            Deep Repository Analysis with 5 AI Specialists
          </h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: 600, margin: '0 auto' }}>
            Get comprehensive insights from architecture flow, mind maps, code quality, security, and performance analysis.
          </p>
        </div>

        {/* Input Form */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.95)', 
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          marginBottom: '2rem'
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              value={repoUrl}
              onChange={e => setRepoUrl(e.target.value)}
              placeholder="Enter GitHub repository URL (e.g., https://github.com/user/repo)"
              style={{ 
                flex: 1,
                padding: '1rem 1.5rem',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
            <button 
              type="submit" 
              disabled={isLoading}
              style={{ 
                padding: '1rem 2rem',
                background: isLoading ? '#9ca3af' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                whiteSpace: 'nowrap',
                opacity: isLoading ? 0.7 : 1
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {isLoading ? 'Analyzing...' : 'Analyze Repository'}
            </button>
            {results && (
              <button 
                type="button"
                onClick={() => {
                  setResults(null);
                  setError(null);
                  setStatus(null);
                  setProgress(0);
                  setJobId(null);
                  setActiveTab('overview');
                  localStorage.removeItem('repoAnalysisResults');
                  localStorage.removeItem('repoAnalysisUrl');
                }}
                style={{ 
                  padding: '1rem 2rem',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Clear Results
              </button>
            )}
          </form>
        </div>

        {/* Status Indicator */}
        {status && (
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.95)', 
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: getStatusColor(status),
                animation: status !== 'done' && status !== 'error' ? 'pulse 2s infinite' : 'none'
              }} />
              <span style={{ fontWeight: '600', color: '#374151' }}>
                {getStatusText(status)}
              </span>
            </div>
            
            {progress > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>Overall Progress</span>
                  <span style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: '600' }}>{progress}%</span>
                </div>
                <div style={{ width: '100%', background: '#e5e7eb', borderRadius: '8px', height: '8px' }}>
                  <div style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '8px',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>
            )}

            {/* Analysis Progress Details */}
            {status === 'analyzing' && Object.keys(analysisProgress).length > 0 && (
              <div style={{ marginTop: '1rem' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#374151' }}>Analysis Progress:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                  {Object.entries(analysisProgress).map(([analysis, status]) => (
                    <div key={analysis} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      padding: '0.5rem',
                      background: '#f9fafb',
                      borderRadius: '6px',
                      border: '1px solid #e5e7eb'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: status === 'completed' ? '#10b981' : status === 'failed' ? '#ef4444' : '#3b82f6',
                        animation: status === 'running' ? 'pulse 1s infinite' : 'none'
                      }} />
                      <span style={{ fontSize: '0.9rem', color: '#374151', textTransform: 'capitalize' }}>
                        {analysis.replace('_', ' ')}: {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div style={{ 
            background: '#fef2f2', 
            border: '1px solid #fecaca',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem',
            color: '#dc2626'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.2rem' }}>⚠️</span>
              <strong>Error:</strong> {error}
            </div>
          </div>
        )}

        {/* Results Display */}
        {results && (
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.95)', 
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            {/* Navigation Tabs */}
            <div style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              marginBottom: '2rem',
              borderBottom: '2px solid #e5e7eb',
              paddingBottom: '1rem'
            }}>
              <button
                onClick={() => setActiveTab('overview')}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: activeTab === 'overview' ? '#667eea' : 'transparent',
                  color: activeTab === 'overview' ? 'white' : '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'overview' ? '600' : '400'
                }}
              >
                📊 Overview
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: activeTab === 'architecture' ? '#667eea' : 'transparent',
                  color: activeTab === 'architecture' ? 'white' : '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'architecture' ? '600' : '400'
                }}
              >
                🏗️ Architecture
              </button>
              <button
                onClick={() => setActiveTab('mindmap')}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: activeTab === 'mindmap' ? '#667eea' : 'transparent',
                  color: activeTab === 'mindmap' ? 'white' : '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'mindmap' ? '600' : '400'
                }}
              >
                🧠 Mind Map
              </button>
              <button
                onClick={() => setActiveTab('quality')}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: activeTab === 'quality' ? '#667eea' : 'transparent',
                  color: activeTab === 'quality' ? 'white' : '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'quality' ? '600' : '400'
                }}
              >
                ✨ Quality
              </button>
              <button
                onClick={() => setActiveTab('security')}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: activeTab === 'security' ? '#667eea' : 'transparent',
                  color: activeTab === 'security' ? 'white' : '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'security' ? '600' : '400'
                }}
              >
                🔒 Security
              </button>
              <button
                onClick={() => setActiveTab('performance')}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: activeTab === 'performance' ? '#667eea' : 'transparent',
                  color: activeTab === 'performance' ? 'white' : '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'performance' ? '600' : '400'
                }}
              >
                ⚡ Performance
              </button>
            </div>

            {/* Tab Content */}
            {renderTabContent()}
          </div>
        )}
              </main>

      {/* Footer */}
      <footer style={{ 
        background: 'rgba(255, 255, 255, 0.1)', 
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '2rem 0',
        marginTop: '4rem'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
            Powered by 5 AI Specialists • Built with React & FastAPI
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

export default App;
