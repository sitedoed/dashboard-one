import React from 'react'
import DataTable from '../components/DataTable'
import Layout from '../components/Layout'
import TextEditor from '../components/TextEditor'

export default function Posts() {
  return (
    <Layout>
      <TextEditor />
      <DataTable />
    </Layout>
  )
}
