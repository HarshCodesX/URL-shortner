import React from 'react'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-bold text-center mb-6'>URL Shortner</h1>
        <form className='space-y-4'>
          <div>
            <label htmlFor="url" className='block text-sm font-medium text-gray-700 mb-1'>
              Enter your URL
            </label>
            <input 
              type="url"
              id='url'
              placeholder='https://example.com'
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50'>
            Shorten URL
          </button>
        </form>

        {/* {error && (
          <div className='mt-4 p-3 bg-red-100 text-red-700 rounded-md'>
            {error}
          </div>
        )} */}

        {/* {shortUrl && (
          <div className='mt-6'>
            <h2 className='text-lg font-semibold mb-2'>Your shortened URL:</h2>
            <div className='flex items-center'>
              <input 
                type="text"
                readOnly
                value={shortUrl}
                className='flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-300'
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText
                  (shortUrl);
                  alert("Copied to clipboard!");
                }}
                className='bg-gray-200 px-4 py-2 rounded-r-md hover:bg-gray-300'
              >
                Copy
              </button>
            </div>
          </div>
        )} */}

      </div>
    </div>
  )
}

export default App