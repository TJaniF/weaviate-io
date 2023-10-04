import React from 'react';
import styles from './styles.module.scss';
import * as Tabs from '@radix-ui/react-tabs';
import { LinkButton } from '/src/theme/Buttons';
import { ButtonContainer } from '../../../theme/Buttons';
import CodeSnippet from './CodeSnippet';

export default function HomepageWhatYouCanDo() {
  const codeExample = `{
    Get {
      Publication(
        nearText: {
          concepts: ["fashion"]
           limit: 1
     ) {
        name
        _additional {
           certainty
           distance
            vector
        }
     }
   }
  }
`;

  const codeExample2 = `{
  Get {
   Article(
    hybrid: {
      query: "Board games people are looking out
for"}
   limit: 10
 ) {
   summary
  title
  url
  wordCount
  }
}
}`;

  const codeExample3 = `{
  Get {
   Article(
    ask: {
      question: "What movie did Ravensburger create a board
game about?"
}
   limit: 1
 ) {
   summary
   title
   url
   wordCount
   _additional{
    answer{
      result
      }
    }
  }
}
}`;

  return (
    <div className="container">
      <div className={styles.header}>
        <h2 className={styles.title}>Search smarter, build easier</h2>
        <p className={styles.subtitle}>
          Beyond search, Weaviate's next-gen vector database<br></br>can power a
          wide range of innovative apps.
        </p>
      </div>
      <div className={styles.module}>
        <Tabs.Root className={styles.tabs} defaultValue="tab1">
          <div className={styles.right}>
            <Tabs.Content className={styles.tabsContent} value="tab1">
              <div className={styles.codeContainer}>
                <p className={styles.tabsText}>
                  Perform lightning-fast pure vector similarity<br></br>search
                  over raw vectors or data objects,<br></br> even with filters.
                </p>
                <CodeSnippet
                  language="typescript"
                  code={codeExample}
                  buttonText="Vector Search"
                />
              </div>
            </Tabs.Content>
            <Tabs.Content className={styles.tabsContent} value="tab2">
              <div className={styles.codeContainer}>
                <p className={styles.tabsText}>
                  Combine keyword-based search with vector search techniques for
                  state-of-the-art results.
                </p>
                <CodeSnippet
                  language="graphql"
                  code={codeExample2}
                  buttonText="Hybrid Search"
                />
              </div>
            </Tabs.Content>
            <Tabs.Content className={styles.tabsContent} value="tab3">
              <div className={styles.codeContainer}>
                <p className={styles.tabsText}>
                  Use any generative model in combination with your data, for
                  example to do Q&A over your dataset.
                </p>
                <CodeSnippet
                  language="graphql"
                  code={codeExample3}
                  buttonText="Generative Search"
                />
              </div>
            </Tabs.Content>
          </div>

          <div className={styles.left}>
            <Tabs.List
              className={styles.tabsList}
              aria-label="What you can do with Weaviate"
            >
              <Tabs.Trigger
                className={styles.tabsTrigger}
                value="tab1"
                disabled={false}
              >
                <h3>Vector Search</h3>
                <p>
                  Perform lightning-fast pure vector similarity<br></br>search
                  over raw vectors or data objects,<br></br> even with filters.
                </p>
              </Tabs.Trigger>

              <Tabs.Trigger className={styles.tabsTrigger} value="tab2">
                <h3>Hybrid Search</h3>
                <p>
                  Combine keyword-based search with vector search techniques for
                  state-of-the-art results.
                </p>
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.tabsTrigger} value="tab3">
                <h3>Generative Search</h3>
                <p>
                  Use any generative model in combination with your data, for
                  example to do Q&A over your dataset.
                </p>
              </Tabs.Trigger>
            </Tabs.List>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
}