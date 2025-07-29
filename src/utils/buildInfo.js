/**
 * Build information utilities
 */

/**
 * Get the current commit hash from environment variables
 * @returns {string} Short commit hash or 'dev' for local development
 */
export const getCommitHash = () => {
  // Both client and server can access NEXT_PUBLIC_ variables
  const hash = process.env.NEXT_PUBLIC_COMMIT_HASH;
  return hash ? hash.substring(0, 7) : 'dev';
};

/**
 * Get the full commit hash from environment variables
 * @returns {string} Full commit hash or null for local development
 */
export const getFullCommitHash = () => {
  // Both client and server can access NEXT_PUBLIC_ variables
  return process.env.NEXT_PUBLIC_FULL_COMMIT_HASH || null;
};

/**
 * Get the GitHub repository URL from environment variables
 * @returns {string} Repository URL or default GitHub URL
 */
export const getRepositoryUrl = () => {
  // Both client and server can access NEXT_PUBLIC_ variables
  return process.env.NEXT_PUBLIC_REPO_URL || 'https://github.com/zharless/zharless.com';
};

/**
 * Get the commit URL for linking to GitHub
 * @returns {string|null} Full GitHub commit URL or null for dev
 */
export const getCommitUrl = () => {
  const fullHash = getFullCommitHash();
  const repoUrl = getRepositoryUrl();
  
  if (!fullHash || fullHash === 'dev') {
    return null;
  }
  
  return `${repoUrl}/commit/${fullHash}`;
};

/**
 * Get build timestamp
 * @returns {string} Build date or current date for dev
 */
export const getBuildDate = () => {
  if (typeof window !== 'undefined') {
    return window.__BUILD_DATE__ || new Date().toISOString().split('T')[0];
  }
  
  return process.env.NEXT_PUBLIC_BUILD_DATE || new Date().toISOString().split('T')[0];
};