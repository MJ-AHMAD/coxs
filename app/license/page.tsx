export default function LicensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">MIT License</h1>
          <p className="text-lg text-gray-600">
            Cox's Bazar District Management System is licensed under the MIT License
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>Copyright (c) 2025 MJ Ahmad</p>

          <p>
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
            documentation files (the "Software"), to deal in the Software without restriction, including without
            limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
            the Software, and to permit persons to whom the Software is furnished to do so, subject to the following
            conditions:
          </p>

          <p>
            The above copyright notice and this permission notice shall be included in all copies or substantial
            portions of the Software.
          </p>

          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
            LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
            EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
            AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
            OR OTHER DEALINGS IN THE SOFTWARE.
          </p>
        </div>

        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Third-Party Licenses</h2>
          <p className="mb-6">This project includes the following third-party open source software components:</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Next.js</h3>
              <p className="text-sm text-gray-600">MIT License</p>
              <p className="mt-2">Copyright (c) 2023 Vercel, Inc.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">React</h3>
              <p className="text-sm text-gray-600">MIT License</p>
              <p className="mt-2">Copyright (c) Meta Platforms, Inc. and affiliates.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
              <p className="text-sm text-gray-600">MIT License</p>
              <p className="mt-2">Copyright (c) Tailwind Labs, Inc.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">shadcn/ui</h3>
              <p className="text-sm text-gray-600">MIT License</p>
              <p className="mt-2">Copyright (c) 2023 shadcn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
