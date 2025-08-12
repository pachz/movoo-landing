export const isStaging = () => {
  // Check for staging environment variables
  const isStagingEnv = process.env.NODE_ENV === 'staging' || 
                      process.env.NEXT_PUBLIC_STAGING === 'true' ||
                      process.env.STAGING === 'true' ||
                      process.env.VERCEL_ENV === 'preview' ||
                      process.env.VERCEL_ENV === 'development';
  
  // Check if the hostname contains staging indicators
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const isStagingHostname = hostname.includes('staging') || 
                           hostname.includes('dev') || 
                           hostname.includes('preview') ||
                           hostname.includes('vercel.app') ||
                           hostname.includes('movoo.cc');
  
  return isStagingEnv || isStagingHostname;
};

export const isProduction = () => {
  return process.env.NODE_ENV === 'production' && !isStaging();
};
