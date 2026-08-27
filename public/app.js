(function () {
  "use strict";

  /* ---------- static reference data (course content; never mutated) ---------- */
  var COURSE_DATA = [{"weekNum": 1, "week": "Week 1", "sessionNum": 1, "session": "Session 1", "name": "LLM Basics and Enterprise API Setup", "instructor": "Anirban Paul", "lecture": {"text": "Session 1.1: LLM Basics and Enterprise API Setup - Fully Depath Narration Notes", "url": "https://docs.google.com/document/d/1IPpar8EgjUlTcPZl2yDPPTfcPOaaeR_a7HpBgEVM2d0/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 1.1: LLM Basics and Enterprise API Setup", "url": "https://docs.google.com/presentation/d/1PTFeLkVMqrbwDRJEfE2isHD83eiZD--vlrBXLggXDC4/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Code - Session 1.1.ipynb", "url": "https://colab.research.google.com/drive/1xHkr5Dv0UM73bb74n0mT37AEwxh5Bcy_?usp=drive_link", "platform": "Google Colab", "domain": "colab.research.google.com"}}, {"weekNum": 1, "week": "Week 1", "sessionNum": 2, "session": "Session 2", "name": "Prompt Engineering & Structured Outputs", "instructor": "Anirban Paul", "lecture": {"text": "Session 1.2: Advanced Prompt Engineering & Structured Outputs", "url": "https://docs.google.com/document/d/1hqhQy2LF1BqkcPGijIC01tPJt2w_SjwflGvgizPUsgQ/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 1.2: Advanced Prompt Engineering & Structured Outputs", "url": "https://docs.google.com/presentation/d/1u6WjYgWT8WTMp79TFIo_arAx6HkJ3tkkWV9lILEAFto/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Code - Session 1.2.ipynb", "url": "https://colab.research.google.com/drive/1EA-7E--JTl60BqzGOj1u-liOl-tfyZWC?usp=drive_link", "platform": "Google Colab", "domain": "colab.research.google.com"}}, {"weekNum": 1, "week": "Week 1", "sessionNum": 3, "session": "Session 3", "name": "Intro to LangChain & Advanced Chunking", "instructor": "Anirban Paul", "lecture": {"text": "Session 1.3: Introduction to LangChain & Advanced Chunking Architecture", "url": "https://docs.google.com/document/d/1k_m77f2KAPW71b-A4fegZ9Cd44hS1_7Ks80xvP23XlE/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 1.3: LangChain & Advanced Chunking", "url": "https://docs.google.com/presentation/d/15GUl8eaEGCXkoF3u7plfBGUTzhcPMEZJ16yjuYqBhdE/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Code - Session 1.3.ipynb", "url": "https://colab.research.google.com/drive/1RpAeO3Yx5-fiaHEr9bVFkLpMdpZBUd91?usp=drive_link", "platform": "Google Colab", "domain": "colab.research.google.com"}}, {"weekNum": 2, "week": "Week 2", "sessionNum": 1, "session": "Session 1", "name": "Embeddings and Vector Math", "instructor": "Vishal Singh", "lecture": {"text": "Session 2.1: Embeddings and Vector Math", "url": "https://docs.google.com/document/d/1RHBhgrcIII7s4-CUAK3P7aGI9MvTpRSFtY_UO7t9ozo/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 2.1: Embeddings and Vector Math", "url": "https://docs.google.com/presentation/d/1DWSEHuCmh262s21HH18IZzhV_GWbz7vjhHKASrFKh_o/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Code - Session 2.1.ipynb", "url": "https://colab.research.google.com/drive/11NbP5UkWqd5Aq8pKS4e2HHW2hjx_W2i5?usp=sharing", "platform": "Google Colab", "domain": "colab.research.google.com"}}, {"weekNum": 2, "week": "Week 2", "sessionNum": 2, "session": "Session 2", "name": "FAISS Index Setup", "instructor": "Vishal Singh", "lecture": {"text": "Session 2.2: FAISS Index Setup & Vector Databases ", "url": "https://docs.google.com/document/d/1SUB1jdlvo2OIVGJTDx_eq2TptbagXbOjFyNwZoHe8S8/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 2.2: FAISS Index Setup & Vector Databases", "url": "https://docs.google.com/presentation/d/1QmeGCz1vpOrTeH9oU-6O7a-PaY4houUCl_PD7jHO9L8/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Code - Session 2.2.ipynb", "url": "https://colab.research.google.com/drive/1Tr1M21VbOetHrTnKVdbN2pyajRGtR-rF?usp=sharing", "platform": "Google Colab", "domain": "colab.research.google.com"}}, {"weekNum": 2, "week": "Week 2", "sessionNum": 3, "session": "Session 3", "name": "The LangChain RAG Pipeline", "instructor": "Vishal Singh", "lecture": {"text": "Session 2.3: The LangChain Ecosystem & LCEL RAG Pipelines", "url": "https://docs.google.com/document/d/1h_ShTug5QojEnFecxhzP9S35JQ5q2NhpZUajD2Hk-Jc/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 2.3: LangChain Ecosystem & LCEL RAG Pipelines", "url": "https://docs.google.com/presentation/d/1huyxjVCux9Ozro8Z7uWU9YP9hXiLdKxxX35Jkr6j5xk/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Code - Session 2.3.ipynb", "url": "https://colab.research.google.com/drive/1XCvEnyvQIzdu_HpXpB5oj60uXuYY8v1I?usp=sharing", "platform": "Google Colab", "domain": "colab.research.google.com"}}, {"weekNum": 3, "week": "Week 3", "sessionNum": 1, "session": "Session 1", "name": "Query Transformations", "instructor": "Vishal Singh", "lecture": {"text": "Session 3.1: Advanced Query Transformations & Routing", "url": "https://docs.google.com/document/d/1gSWhi-6J0CGBYi6JYjaYdCv_e2DZlgjnENktnENaJGA/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 3.1: Beyond Naive RAG & Query Transformations", "url": "https://docs.google.com/presentation/d/17EmpI2pDNWGiysJVdsk5ujInyl0WEWKAxyfN4-Y9f0k/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Code - Session 3.1.ipynb", "url": "https://colab.research.google.com/drive/1mhFLGkpzXpz4e2G82apy0vUGulUULwH4?usp=sharing", "platform": "Google Colab", "domain": "colab.research.google.com"}}, {"weekNum": 3, "week": "Week 3", "sessionNum": 2, "session": "Session 2", "name": "Re-ranking & Context Optimization", "instructor": "Vishal Singh", "lecture": {"text": "Session 3.2: Re-ranking & Context Optimization", "url": "https://docs.google.com/document/d/1NIkz2X8GD2XoCKhz47E9XvoZjm0G-twbn4MmeScR7wA/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 3.2 : Bi-Encoders & Cross-Encoders", "url": "https://docs.google.com/presentation/d/1WPax9mvTzMmiKsRjkPe2ezJ6SRJsZWyrILEV4VVzfrA/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Code - Session 3.2.ipynb", "url": "https://colab.research.google.com/drive/1F0fIHGL_HhQoPfYgFTsjj9JvMo8k75Co?usp=sharing", "platform": "Google Colab", "domain": "colab.research.google.com"}}, {"weekNum": 3, "week": "Week 3", "sessionNum": 3, "session": "Session 3", "name": "Evaluation Pipelines (Ragas)", "instructor": "Vishal Singh", "lecture": {"text": "Session 3.3: Evaluation Pipelines (Ragas)", "url": "https://docs.google.com/document/d/1NhvTPxSsMWDNi5p178eZzL6iFEBmcS646jTnYuXo2Sk/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 3.3 - Evaluation Pipelines (Ragas)", "url": "https://docs.google.com/presentation/d/13vMFbSQUo7igPHxmluOca1Rq5SgRd6cEK8pjcKRRdqs/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Code - Session 3.3.ipynb", "url": "https://colab.research.google.com/drive/1kgKk0WyJW99WBDEyjZ8IyEojy9Umb78r?usp=sharing", "platform": "Google Colab", "domain": "colab.research.google.com"}}, {"weekNum": 4, "week": "Week 4", "sessionNum": 1, "session": "Session 1", "name": "Hybrid Search Implementations", "instructor": "Vishal Singh", "lecture": {"text": "Session 4.1", "url": "https://docs.google.com/document/d/1BXuVb5D9SS_Aezj7Q-lvrTlkwcmcglllGs4nhDHRe_A/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 4.1 - Hybrid Search Implementations", "url": "https://docs.google.com/presentation/d/1ABzuSHljB3CAFL0mow18lIGi6cej4eMRIr9Nvc2xzN8/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Code - Session 4.1.ipynb", "url": "https://colab.research.google.com/drive/1FSmwrX2pTVI4NjUKm9HB9CI4bnRTPTZJ?usp=sharing", "platform": "Google Colab", "domain": "colab.research.google.com"}}, {"weekNum": 4, "week": "Week 4", "sessionNum": 2, "session": "Session 2", "name": "Structured Data Orchestration (Text-to-SQL)", "instructor": "Vishal Singh", "lecture": {"text": "Session 4.2", "url": "https://docs.google.com/document/d/1jGUYdLfWB9cPP5ICAbrmgDhzOuWBp_99DA1GAjopssc/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 4.2 - Structured Data Orchestration", "url": "https://docs.google.com/presentation/d/1r16P2m1WkNEEFMYX25RUIAEQ5X3fmCPr5eQuJsOQmv8/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Code - Session 4.2.ipynb", "url": "https://colab.research.google.com/drive/18nPCbrIlmkLJwhmFZLD-W2uM70lKXDG6?usp=sharing", "platform": "Google Colab", "domain": "colab.research.google.com"}}, {"weekNum": 4, "week": "Week 4", "sessionNum": 3, "session": "Session 3", "name": "Multi-Source Routing", "instructor": "Vishal Singh", "lecture": {"text": "1. Session 4.3 - Capstone Problem Statement\n2. Session 4.3 - System Design", "url": "https://docs.google.com/document/d/1n4w0_yqpc-Bx0Zt4zPFPPaIFo8yHLcWhvd2uAKohv8Y/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "AlphaFund System Design", "url": "https://docs.google.com/presentation/d/1_IXMgu42sJkG_euDPtftcp_6bJsQUTik8sHrwPi8CC0/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github link - https://github.com/Raman16-Sharma/The-AlphaFund-Dashboard\n\nPrompt - Prompt : AlphaFund Terminal", "url": "https://docs.google.com/document/d/1aaJVocF02RJLhFkycO0UFxs5BX5Kyjshldn7R8GiejM/edit?usp=sharing", "platform": "Google Docs", "domain": "docs.google.com"}}, {"weekNum": 5, "week": "Week 5", "sessionNum": 1, "session": "Session 1", "name": "Knowledge Graph Primitives", "instructor": "Kumar Ramendra", "lecture": {"text": "Session 5.1", "url": "https://docs.google.com/document/d/1ZwAhOgPBQmnAaym41DJ9w1Ewsa5qX0frt14PHrcQ5is/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 5. 1 - Knowledge Graph Primitives", "url": "https://docs.google.com/presentation/d/13gTCQCH52qTMhBMplLc7gIp_bQVmeRZrpYMShr6kYxw/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/knowledge-graph-primitives/", "url": "https://github.com/waseemkhan606/knowledge-graph-primitives/", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 5, "week": "Week 5", "sessionNum": 2, "session": "Session 2", "name": "LLM Entity Extraction", "instructor": "Kumar Ramendra", "lecture": {"text": "Session 5.2", "url": "https://docs.google.com/document/d/1tK5987WEi1hxrHEB8p8B-COxEv9iJjf2l2GrZ_09pTw/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 5.2 - LLM Entity Extraction (Text-to-Graph)", "url": "https://docs.google.com/presentation/d/1_QGhMYnXon27hNf6gYSBERMQ5XAlqWNbIfoiZAzYDp8/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/entityextraction", "url": "https://github.com/waseemkhan606/entityextraction", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 5, "week": "Week 5", "sessionNum": 3, "session": "Session 3", "name": "Querying & Traversing GraphRAG", "instructor": "Kumar Ramendra", "lecture": {"text": "Session 5.3", "url": "https://docs.google.com/document/d/1SysDu_yvLA2nvH8ohL1j0HFy1t1jjGH9y1jYJzEyGHg/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Querying & Traversing GraphRAG", "url": "https://docs.google.com/presentation/d/1f6zy3ZMbfHm2kx8LX2XwyY_NEXPQTmR0j-FxW4cnA2Q/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/graphrag", "url": "https://github.com/waseemkhan606/graphrag", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 6, "week": "Week 6", "sessionNum": 1, "session": "Session 1", "name": "Declarative Optimization (DSPy)", "instructor": "Kumar Ramendra", "lecture": {"text": "Session 6.1", "url": "https://docs.google.com/document/d/13IVDIZ_h1CgaZPsAco972-e1OwEUO3Utmt9_JzC66EE/edit?usp=sharing", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 6.1 - Declarative Optimization (DSPy)", "url": "https://docs.google.com/presentation/d/1GTuRT243R30647ySUN2EOvpCKWvNSKY-NhFNuwJ-Odk/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/declarativeOptimization", "url": "https://github.com/waseemkhan606/declarativeOptimization", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 6, "week": "Week 6", "sessionNum": 2, "session": "Session 2", "name": "Multi-Hop Reasoning Compilation", "instructor": "Kumar Ramendra", "lecture": {"text": "Session 6.2", "url": "https://docs.google.com/document/d/1fqPT98VCrQVGrPVkUYZIZMMlQ0elfK769QMy47nhsTQ/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 6.2 - Multi-Hop Reasoning (ReAct)", "url": "https://docs.google.com/presentation/d/1_8DEIqFtmeqKp9AnNnVCpkNqlHuFSkGv5y52-3-HsCc/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/multiHopReasoning", "url": "https://github.com/waseemkhan606/multiHopReasoning", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 6, "week": "Week 6", "sessionNum": 3, "session": "Session 3", "name": "Automated Prompt Tuning", "instructor": "Kumar Ramendra", "lecture": {"text": "Session 6.3", "url": "https://docs.google.com/document/d/1qGt8130Sfgl6s6fv2uMv1Ath0_VqGfqS5ErN_fGh7Ro/edit?usp=drive_link", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 6.3 - Automated Prompt Tuning", "url": "https://docs.google.com/presentation/d/10co4uFRPXb-Vvdp63QxwM-UcEQcjw3SsxU1Az8m5ypQ/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "GIthub Link - https://github.com/waseemkhan606/automatedPromptTuning", "url": "https://github.com/waseemkhan606/automatedPromptTuning", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 7, "week": "Week 7", "sessionNum": 1, "session": "Session 1", "name": "State Machines & Execution Graphs", "instructor": "Ankit Jha", "lecture": {"text": "Session-7.1.docx", "url": "https://docs.google.com/document/d/1xi4ERKuuem0bvyL0f6vw_EAtcsBlVonf/edit?usp=drive_link&ouid=109567469670894412757&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 7.1: State Machines & Execution Graphs", "url": "https://docs.google.com/presentation/d/1ZnOTItZAHR90NWT7gG3LdWqj4M4KyEEZjh6_BvaeMbg/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase3-session1", "url": "https://github.com/waseemkhan606/phase3-session1", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 7, "week": "Week 7", "sessionNum": 2, "session": "Session 2", "name": "Tool Binding & Execution", "instructor": "Ankit Jha", "lecture": {"text": "Session_7.2.docx", "url": "https://docs.google.com/document/d/1ADkWzfCZMRkyBwvXkKUlm2tqot3vu6k4/edit?usp=drive_link&ouid=109567469670894412757&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 7.2 - Tool Binding & Execution", "url": "https://docs.google.com/presentation/d/1JcAgGotZl1B6ds7W1KO8atmQH1r1bLxIdCwFeRBzE7Y/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase3-session2/blob/main/README.md", "url": "https://github.com/waseemkhan606/phase3-session2/blob/main/README.md", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 7, "week": "Week 7", "sessionNum": 3, "session": "Session 3", "name": "The ReAct Architecture Implementation", "instructor": "Ankit Jha", "lecture": {"text": "Session-7.3.docx", "url": "https://docs.google.com/document/d/1lN0zPq8F6za12WmKauy0usTPOLJI2VGD/edit?usp=drive_link&ouid=109567469670894412757&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 7.3 - The ReAct Architecture", "url": "https://docs.google.com/presentation/d/1SJw3_1ooIOpX660BORBS5PA7LrTGGV2-hEeMzwGzyMA/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase3-session3", "url": "https://github.com/waseemkhan606/phase3-session3", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 8, "week": "Week 8", "sessionNum": 1, "session": "Session 1", "name": "Persistence & Threading", "instructor": "Ankit Jha", "lecture": {"text": "Session-8.1.docx", "url": "https://docs.google.com/document/d/1cky1Mq9k9MtlSR-8zCqb9L8NCHP1BwPP/edit?usp=drive_link&ouid=109567469670894412757&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 8.1 - Persistence & Threading", "url": "https://docs.google.com/presentation/d/1ej3zlrcAQkuF8aNaBu1jMfaSmSfohxNl7tRDmxzhRBg/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase3-session4 ", "url": "https://github.com/waseemkhan606/phase3-session4", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 8, "week": "Week 8", "sessionNum": 2, "session": "Session 2", "name": "Context Management & Summarization", "instructor": "Ankit Jha", "lecture": {"text": "Session-8.2.docx", "url": "https://docs.google.com/document/d/1NMTzkTIldItUP4KjtbusoupaiPOA2TNL/edit?usp=drive_link&ouid=109567469670894412757&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 8.2 - Context Management & Summarization", "url": "https://docs.google.com/presentation/d/1Pb4zu-JFbMGKTDjV4-03upEUtk79cqrA6qCvBxiM0qs/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase3-session5", "url": "https://github.com/waseemkhan606/phase3-session5", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 8, "week": "Week 8", "sessionNum": 3, "session": "Session 3", "name": "Guardrails & Execution Bounding", "instructor": "Ankit Jha", "lecture": {"text": "Session_8.3.docx", "url": "https://docs.google.com/document/d/1ndmSquxMs8zrW02BU_sKCIDebpanJUI2/edit?usp=drive_link&ouid=109567469670894412757&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 8.3 - Guardrails & Execution Bounding", "url": "https://docs.google.com/presentation/d/1lGhnMr_Uv06pYOIV21AnZx2u7HYLI9XJbEq54a24kRM/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase3-session6", "url": "https://github.com/waseemkhan606/phase3-session6", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 9, "week": "Week 9", "sessionNum": 1, "session": "Session 1", "name": "Multi-Agent Topologies", "instructor": "Ankit Jha", "lecture": {"text": "Session-9.1.docx", "url": "https://docs.google.com/document/d/1Up1Dz_WaJkgJQCNWklUasSxSk15cG-cw/edit?usp=drive_link&ouid=109567469670894412757&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 9.1 - Multi-Agent Topologies", "url": "https://docs.google.com/presentation/d/1fmO-zculLxrxqZSJdUqdTux9fU-3pIvm_bKf0dUNItE/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase3-session7", "url": "https://github.com/waseemkhan606/phase3-session7", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 9, "week": "Week 9", "sessionNum": 2, "session": "Session 2", "name": "The Supervisor Orchestrator", "instructor": "Ankit Jha", "lecture": {"text": "Session-9.2.docx", "url": "https://docs.google.com/document/d/1PDbjwFn6F3qoi68dq8wxK0V21MBwlqYv/edit?usp=drive_link&ouid=109567469670894412757&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 9.2 - The Supervisor Orchestrator", "url": "https://docs.google.com/presentation/d/12Ix7TV7wpfZJOce06S7DRvxEaWLiEehQZ99xs7C5_nk/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase3-session8 ", "url": "https://github.com/waseemkhan606/phase3-session8", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 9, "week": "Week 9", "sessionNum": 3, "session": "Session 3", "name": "Shared Scratchpads & Consensus", "instructor": "Ankit Jha", "lecture": {"text": "Session-9.3.docx", "url": "https://docs.google.com/document/d/1sdZmdG_RJozZGPDic19ZGk7P299s1JGa/edit?usp=drive_link&ouid=109567469670894412757&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 9.3 - Shared Scratchpads & Consensus", "url": "https://docs.google.com/presentation/d/1G8-lV8NkzhgsD0CtV_RdTl-L0w6z_whdNbeUZoZTLGI/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase3-session9 ", "url": "https://github.com/waseemkhan606/phase3-session9", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 10, "week": "Week 10", "sessionNum": 1, "session": "Session 1", "name": "System API Integration (Write Access)", "instructor": "Ankit Jha", "lecture": {"text": "Session-10.1.docx", "url": "https://docs.google.com/document/d/1Db_1O56O9I8ocwJI46sUSpbEUefFvgIR/edit?usp=drive_link&ouid=109567469670894412757&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 10.1 - System API Integration", "url": "https://docs.google.com/presentation/d/1imjtzjpfFrYQzrCTAAb0Y85G5HW-ICEzDpQAzUhxPGw/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase3-session10", "url": "https://github.com/waseemkhan606/phase3-session10", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 10, "week": "Week 10", "sessionNum": 2, "session": "Session 2", "name": "Interruptions & Breakpoints", "instructor": "TBD", "lecture": {"text": "Session-10.2.docx", "url": "https://docs.google.com/document/d/18E-fqo_liu7mouYV5u9GrqXmTkcs5OKT/edit?usp=drive_link&ouid=109567469670894412757&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 10.2 - Interruptions & Breakpoints", "url": "https://docs.google.com/presentation/d/1wC8Q0pZjObfw6s83k4yCnldUCvNMOEPNWz5DK3dRtpo/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase3-session11 ", "url": "https://github.com/waseemkhan606/phase3-session11", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 10, "week": "Week 10", "sessionNum": 3, "session": "Session 3", "name": "Time Travel & State Forgery", "instructor": "TBD", "lecture": {"text": "Session-10.3.docx", "url": "https://docs.google.com/document/d/1Y4p-kgv9P1-TPNSvsnAlSJ-dnrY8gri3/edit?usp=drive_link&ouid=109567469670894412757&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 10.3 - Time Travel & State Forensics", "url": "https://docs.google.com/presentation/d/1DHhZtZldSGxV3p1wSt2xoTPOW38Xnwvt__-Lfi9M124/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase3-session12 ", "url": "https://github.com/waseemkhan606/phase3-session12", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 11, "week": "Week 11", "sessionNum": 1, "session": "Session 1", "name": "High-Throughput Inference Engines", "instructor": "Nirakar Padhy", "lecture": {"text": "Session-11.1.docx", "url": "https://docs.google.com/document/d/1JJo8o-wQI04xotDNeVlWekE-GMXbqE3R/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 11.1 - High-Throughput Inference", "url": "https://docs.google.com/presentation/d/1wKGF2Uj2Hg-bDKpYWDpdUKZ2LzfiP7LH2SKCb51lD0s/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase4-session1/", "url": "https://github.com/waseemkhan606/phase4-session1/", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 11, "week": "Week 11", "sessionNum": 2, "session": "Session 2", "name": "Model Quantization Formats", "instructor": "Nirakar Padhy", "lecture": {"text": "Session-11.2.docx", "url": "https://docs.google.com/document/d/1tFHaWr4qf-A0I7myrdpjwUZPqF1yvWjL/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 11.2 - Model Quantization ", "url": "https://docs.google.com/presentation/d/1yM0yAjEZHOyqRC_-prNuGplL8HalSryFkcxFbuk1UBI/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - \nhttps://github.com/waseemkhan606/phase4-session2/", "url": "https://github.com/waseemkhan606/phase4-session2/", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 11, "week": "Week 11", "sessionNum": 3, "session": "Session 3", "name": "GPU Resource Allocation", "instructor": "Nirakar Padhy", "lecture": {"text": "Session-11-3.docx", "url": "https://docs.google.com/document/d/1gEsHO91Pup-pzHxHnBa8cCtiuFjNeMz7/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 11.3 - GPU Resource Allocation", "url": "https://docs.google.com/presentation/d/1kbsmn8iu0JCZOUeMr4p4XpGrUKSCzuL0E8XYNkkCx7g/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase4-session3", "url": "https://github.com/waseemkhan606/phase4-session3", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 12, "week": "Week 12", "sessionNum": 1, "session": "Session 1", "name": "FastAPI & Asynchronous Event Loops", "instructor": "Nirakar Padhy", "lecture": {"text": "Session-12.1.docx", "url": "https://docs.google.com/document/d/1CZ4g-M8CmF9DoVH1UoBZlh_4N2yg8ILR/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 12.1 - FastAPI & Asynchronous Event Loops", "url": "https://docs.google.com/presentation/d/1QftgMVLjb7mJW0jb4Dr-xAHu7CqYuLzYqzXctDsmH-Q/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase4-session4", "url": "https://github.com/waseemkhan606/phase4-session4", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 12, "week": "Week 12", "sessionNum": 2, "session": "Session 2", "name": "Streaming Agentic Outputs", "instructor": "Nirakar Padhy", "lecture": {"text": "Session-12.2.docx", "url": "https://docs.google.com/document/d/1KJfgdbQ2QHuvUbdF8z1CmF-82HkTE6eT/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 12.2 - Streaming Agentic Outputs", "url": "https://docs.google.com/presentation/d/109a-8_NAU6AYvdSxmnS_HxDRO13bmMKSatVKjOHo6Fw/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase4-session5", "url": "https://github.com/waseemkhan606/phase4-session5", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 12, "week": "Week 12", "sessionNum": 3, "session": "Session 3", "name": "Resilience & Queuing", "instructor": "Nirakar Padhy", "lecture": {"text": "Session-12.3.docx", "url": "https://docs.google.com/document/d/1Bs3dygyab3oSChhePHjEpozVZEYfK_3r/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 12.3 - Resilience & Queuing", "url": "https://docs.google.com/presentation/d/18WsCO7RXa9qGSdvz-qadF4VYUtsdMlzhI86BUjejyng/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase4-session6", "url": "https://github.com/waseemkhan606/phase4-session6", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 13, "week": "Week 13", "sessionNum": 1, "session": "Session 1", "name": "The Telemetry Standard", "instructor": "Nirakar Padhy", "lecture": {"text": "Session_13_1.docx", "url": "https://docs.google.com/document/d/1rqkB1oaqmqP8HI65P66DEPfsjAsKQFGU/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 13.1 - The Telemetry Standard", "url": "https://docs.google.com/presentation/d/1q0LFaF4hKWRvyz1xiR8jDBfTlPHexLTnQejS-BtNNSA/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase4-session7", "url": "https://github.com/waseemkhan606/phase4-session7", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 13, "week": "Week 13", "sessionNum": 2, "session": "Session 2", "name": "Purpose-Built AI Observability & Trajectory Evaluation", "instructor": "Nirakar Padhy", "lecture": {"text": "Session_13_2.docx", "url": "https://docs.google.com/document/d/1TKOCigIh94VaKYEKsZzMH6U6ctByInWt/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 13.2 - Purpose-Built Observability", "url": "https://docs.google.com/presentation/d/1tfv6ia8AL42tkeQL4qF-1YQ2JK6Ig1KUYcKYZk9Yyao/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase4-session8 ", "url": "https://github.com/waseemkhan606/phase4-session8", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 13, "week": "Week 13", "sessionNum": 3, "session": "Session 3", "name": "Monitoring & Alerting", "instructor": "Nirakar Padhy", "lecture": {"text": "Session_13_3.docx", "url": "https://docs.google.com/document/d/1ubCZH-fSIF9PJxiQkEJA8L5VRTXCSG1f/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 13.3 \u2014 Monitoring & Alerting", "url": "https://docs.google.com/presentation/d/1aPsZBivkny4O_gFdWHUIZp8KCTl3rlAw-hl1GgYbBHU/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase4-session9 ", "url": "https://github.com/waseemkhan606/phase4-session9", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 14, "week": "Week 14", "sessionNum": 1, "session": "Session 1", "name": "The Cost Problem", "instructor": "Nirakar Padhy", "lecture": {"text": "Session_14_1.docx", "url": "https://docs.google.com/document/d/1fihKU9-3573GCNHIzNHqcKS1BDFwIAWH/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 14.1: FinOps for AI and the Semantic Cache", "url": "https://docs.google.com/presentation/d/1yF9T2q_DxHtlc-4LORkLskOrpxPeDBLqBVaneR7zpjQ/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase4-session10 ", "url": "https://github.com/waseemkhan606/phase4-session10", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 14, "week": "Week 14", "sessionNum": 2, "session": "Session 2", "name": "Dynamic Model Routing (LiteLLM)", "instructor": "Nirakar Padhy", "lecture": {"text": "Session_14_2.docx", "url": "https://docs.google.com/document/d/16aF4NySFAn3xUmKwSsEgkbDYJ-f9Zrhh/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 14.2: LiteLLM + Model Routing", "url": "https://docs.google.com/presentation/d/1eXkPQy-8vvkDYZP1OSoWqlZHGgrl9PPcxq7gEs53lmc/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link -  https://github.com/waseemkhan606/phase4-session11 ", "url": "https://github.com/waseemkhan606/phase4-session11", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 14, "week": "Week 14", "sessionNum": 3, "session": "Session 3", "name": "Fallbacks & Load Balancing", "instructor": "Nirakar Padhy", "lecture": {"text": "Session_14_3.docx", "url": "https://docs.google.com/document/d/1yfT9bImsLNMO_wh9AsObNVcHzDOz3R_u/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 14.3: Fallbacks and Load Balancing", "url": "https://docs.google.com/presentation/d/16YxJqRnrpVkkyUt43jbmIotOpdAda9H8VvNhh79YaDk/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase4-session12 ", "url": "https://github.com/waseemkhan606/phase4-session12", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 15, "week": "Week 15", "sessionNum": 1, "session": "Session 1", "name": "Multi-Tenant Architecture", "instructor": "TBD", "lecture": {"text": "Session_15_1.docx", "url": "https://docs.google.com/document/d/1aG7DpU3LVPi5kG7wgFhEAMgQFopPAwPz/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 15.1 - Multi-Tenant Architecture", "url": "https://docs.google.com/presentation/d/1ybFOLhRlHs7k5EnQLOKRZ_tjZT3fG21d_qFoyjh5Heo/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase5-session1", "url": "https://github.com/waseemkhan606/phase5-session1", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 15, "week": "Week 15", "sessionNum": 2, "session": "Session 2", "name": "Enterprise RBAC for AI", "instructor": "TBD", "lecture": {"text": "Session_15_2.docx", "url": "https://docs.google.com/document/d/1hnL8cn4Y9eHZxtJeUeQIGMf5ar3mqiWX/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 15.2 - Enterprise RBAC for AI", "url": "https://docs.google.com/presentation/d/1fYKnQFm3jaUMlwTcjEQAONTuHMCxKb4wypBHUHSEu6Q/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase5-session2", "url": "https://github.com/waseemkhan606/phase5-session2", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 15, "week": "Week 15", "sessionNum": 3, "session": "Session 3", "name": "SLA & Reliability Engineering", "instructor": "TBD", "lecture": {"text": "Session_15_3.docx", "url": "https://docs.google.com/document/d/1VFSQ-1FVHqyFopH7QXzl--MGCLS3CcBR/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 15.3 - SLA & Reliability Engineering", "url": "https://docs.google.com/presentation/d/1KGakxcY23aIlu7zwTDmBzCJSQvpS9s9NAJbuzClEdtQ/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase5-session3", "url": "https://github.com/waseemkhan606/phase5-session3", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 16, "week": "Week 16", "sessionNum": 1, "session": "Session 1", "name": "Capstone Integration Phase 1", "instructor": "TBD", "lecture": {"text": "Session_16_1.docx", "url": "https://docs.google.com/document/d/1UAfk9qdqH5dqm9QCC__FhKmZpxepzlIu/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 16.1 - Production Containerization ", "url": "https://docs.google.com/presentation/d/1whZq4ap25L9dEza1tznmWlMo98vde_vWko2y8l6dvh8/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase5-session4", "url": "https://github.com/waseemkhan606/phase5-session4", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 16, "week": "Week 16", "sessionNum": 2, "session": "Session 2", "name": "Capstone Integration Phase 2", "instructor": "TBD", "lecture": {"text": "Session_16_2.docx", "url": "https://docs.google.com/document/d/1WJUZ43NOulVgDWHEUBALU8tMFp-KmMA7/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 16.2 - Intergration Testing", "url": "https://docs.google.com/presentation/d/1OD1iJfryCSZBv01xc570lcMUUX3w6Wv2O8Rtlh3VTS8/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase5-session5 ", "url": "https://github.com/waseemkhan606/phase5-session5", "platform": "GitHub", "domain": "github.com"}}, {"weekNum": 16, "week": "Week 16", "sessionNum": 3, "session": "Session 3", "name": "Load Testing & Platform Operations", "instructor": "TBD", "lecture": {"text": "Session_16_3.docx", "url": "https://docs.google.com/document/d/1lbib7MCjuMDxkqUaZtuBmQUGf9hbDTrx/edit?usp=drive_link&ouid=104135001119815028645&rtpof=true&sd=true", "platform": "Google Docs", "domain": "docs.google.com"}, "ppt": {"text": "Session 16.3 - Stress Testing", "url": "https://docs.google.com/presentation/d/1wiNMZOaYJfaE7s3sGGZFyhfkOTS7H1drJ0DZ9FJFsVA/edit?usp=sharing", "platform": "Google Slides", "domain": "docs.google.com"}, "handson": {"text": "Github Link - https://github.com/waseemkhan606/phase5-session6 ", "url": "https://github.com/waseemkhan606/phase5-session6", "platform": "GitHub", "domain": "github.com"}}];
  var PHASES = [{"id": "phase1", "afterWeek": 3, "title": "Phase Project \u2014 1", "subtitle": "Milestone after Week 3", "resources": [{"label": "GitHub Repo", "type": "code", "text": "Single-Source-Retrieval", "url": "https://github.com/waseemkhan606/Single-Source-Retrieval"}, {"label": "Project Doc", "type": "doc", "text": "Phase 1 \u2014 Prompt Template (Project)", "url": "https://docs.google.com/document/d/1R7JXsyWt4m1ddHA_hnH3Jr_RR-LjR84j0-1PY6t6Ka4/edit?usp=sharing"}]}, {"id": "phase2", "afterWeek": 6, "title": "Phase Project \u2014 2", "subtitle": "Milestone after Week 6", "resources": [{"label": "GitHub Repo", "type": "code", "text": "PhaseDosProject", "url": "https://github.com/waseemkhan606/PhaseDosProject"}, {"label": "Project Doc", "type": "doc", "text": "Phase 2 \u2014 Project Inspiration", "url": "https://docs.google.com/document/d/1Fnbj0Wo7ruacJ27H25Uht6fh88vc8eh5AMHIph6inOY/edit?usp=sharing"}]}];

  var FLAG_ICON = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.5 2v12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M3.5 2.8h8l-1.8 2.7 1.8 2.7h-8" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>';
  var ICONS = {
    doc: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 2h5.5L12 4.5V14H4V2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M9.5 2v2.5H12" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M6 8h4M6 10.3h4M6 5.7h1.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>',
    slides: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="3" width="11" height="8" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M6 13.5h4M8 11v2.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M5 8.3l1.8-1.8 1.3 1.3L10.8 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    code: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M5.5 5L2.5 8l3 3M10.5 5l3 3-3 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  var RESOURCES = [
    { key: 'lecture', label: 'Lecture Doc', type: 'doc' },
    { key: 'ppt', label: 'PPT', type: 'slides' },
    { key: 'handson', label: 'Hands-on', type: 'code' }
  ];

  var root = document.getElementById('root');

  var ui = {
    booting: true,
    email: null,
    role: null,
    loginError: '',
    loginInput: '',
    week: null,
    session: null,
    type: 'week',
    phaseId: null,
    query: '',
    adminOpen: false,
    adminTab: 'access',
    adminAddEmail: '',
    adminAddRole: 'instructor',
    adminLogFilter: '',
    adminUsers: [],
    adminUsersLoading: false,
    adminLogs: [],
    adminLogsLoading: false,
    toast: null
  };

  function isAdmin() { return ui.role === 'admin'; }

  /* ---------- helpers ---------- */
  function escapeHtml(str) { return (str || '').toString().replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function escapeAttr(str) { return escapeHtml(str); }
  function platformDomain(url) { try { return new URL(url).hostname.replace('www.', ''); } catch (e) { return ''; } }
  function fmtTime(ts) { var d = new Date(ts); return d.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }); }

  var weeks = (function () { var s = {}; COURSE_DATA.forEach(function (d) { s[d.weekNum] = true; }); return Object.keys(s).map(Number).sort(function (a, b) { return a - b; }); })();

  function sessionsFor(weekNum) { return COURSE_DATA.filter(function (d) { return d.weekNum === weekNum; }).sort(function (a, b) { return a.sessionNum - b.sessionNum; }); }
  function matchesQuery(row, q) { if (!q) return true; var hay = (row.name + ' ' + row.week + ' ' + row.session).toLowerCase(); return hay.indexOf(q) !== -1; }
  function firstWeekLabel(weekNum) { var s = sessionsFor(weekNum)[0]; return s ? s.name : ''; }

  function api(path, opts) {
    opts = opts || {};
    var init = { method: opts.method || 'GET', credentials: 'same-origin', headers: {} };
    if (opts.body !== undefined) {
      init.headers['Content-Type'] = 'application/json';
      init.body = JSON.stringify(opts.body);
    }
    return fetch(path, init).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (data) {
        return { status: r.status, ok: r.ok, data: data };
      });
    });
  }

  function logEvent(action, detail) {
    api('/api/log', { method: 'POST', body: { action: action, detail: detail || '' } }).catch(function () {});
  }

  /* ---------- boot ---------- */
  function boot() {
    render();
    api('/api/me').then(function (res) {
      if (res.ok && res.data && res.data.ok) {
        ui.email = res.data.email;
        ui.role = res.data.role;
      }
      ui.booting = false;
      if (ui.week === null) ui.week = weeks[0];
      if (ui.session === null) { var first = sessionsFor(ui.week)[0]; ui.session = first ? first.sessionNum : null; }
      render();
    }).catch(function () {
      ui.booting = false;
      if (ui.week === null) ui.week = weeks[0];
      if (ui.session === null) { var first = sessionsFor(ui.week)[0]; ui.session = first ? first.sessionNum : null; }
      render();
    });
  }

  /* ---------- cards / nav / panel (pure, same as before) ---------- */
  function renderCard(res) {
    var domain = res.url ? platformDomain(res.url) : '—';
    return '' +
      '<div class="res-card">' +
        '<div class="res-top"><div class="res-icon ' + res.type + '">' + ICONS[res.type] + '</div><div class="res-label">' + res.label + '</div></div>' +
        '<div class="res-title">' + escapeHtml(res.text) + '</div>' +
        '<div class="res-preview"><span class="url" title="' + escapeHtml(res.url || '') + '">' + escapeHtml(res.url || 'No link on file') + '</span>' +
          (res.url ? '<span class="domain-badge">' + escapeHtml(domain) + '</span>' : '') + '</div>' +
        '<div class="res-actions">' +
          (res.url
            ? '<a class="btn-open" data-open-url="' + escapeAttr(res.url) + '" data-open-label="' + escapeAttr(res.label + ': ' + res.text) + '" href="' + escapeAttr(res.url) + '" target="_blank" rel="noopener noreferrer">Open <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M4 8L8 4M8 4H4.5M8 4V7.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
              '<button class="btn-copy" data-copy-url="' + escapeAttr(res.url) + '" data-copy-label="' + escapeAttr(res.label + ': ' + res.text) + '" title="Copy link" aria-label="Copy link">' + copyIconSvg() + '</button>'
            : '<span class="btn-open" style="opacity:.5;cursor:not-allowed;">No link</span>') +
        '</div>' +
      '</div>';
  }
  function copyIconSvg() { return '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="5.5" y="5.5" width="7.5" height="7.5" rx="1.3" stroke="currentColor" stroke-width="1.2"/><path d="M3 10V3.8A1.3 1.3 0 0 1 4.3 2.5H10" stroke="currentColor" stroke-width="1.2"/></svg>'; }

  function renderNav() {
    var q = ui.query.trim().toLowerCase();
    var out = '';
    weeks.forEach(function (w) {
      var sessions = sessionsFor(w);
      var hasMatch = sessions.some(function (s) { return matchesQuery(s, q); });
      if (!(q && !hasMatch)) {
        out += '<button class="week-btn ' + (ui.type === 'week' && w === ui.week ? 'active' : '') + '" data-week="' + w + '" title="Week ' + w + ': ' + escapeAttr(firstWeekLabel(w)) + '">' +
          '<span class="num">' + String(w).padStart(2, '0') + '</span><span class="label">' + escapeHtml(firstWeekLabel(w)) + '</span></button>';
      }
      if (!q) {
        PHASES.filter(function (p) { return p.afterWeek === w; }).forEach(function (phase) {
          out += '<button class="phase-btn ' + (ui.type === 'phase' && ui.phaseId === phase.id ? 'active' : '') + '" data-phase="' + phase.id + '" title="' + escapeAttr(phase.title) + '">' +
            '<span class="flag">' + FLAG_ICON + '</span><span class="label">' + escapeHtml(phase.title) + '</span></button>';
        });
      }
    });
    return out;
  }

  function renderPhasePanel() {
    var phase = PHASES.filter(function (p) { return p.id === ui.phaseId; })[0] || PHASES[0];
    return '' +
      '<div class="phase-head" style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">' +
        '<div style="width:34px;height:34px;border-radius:9px;background:var(--accent-soft);border:1px solid var(--accent-soft-border);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + FLAG_ICON + '</div>' +
        '<div><p style="font-family:\'IBM Plex Mono\',monospace;font-size:11px;letter-spacing:.07em;text-transform:uppercase;color:var(--accent);margin:0 0 2px;">' + escapeHtml(phase.subtitle) + '</p>' +
        '<h2 style="margin:0;font-family:\'Sora\',sans-serif;font-size:19px;font-weight:700;">' + escapeHtml(phase.title) + '</h2></div>' +
      '</div>' +
      '<div class="session-card"><div class="resources cols-2">' + phase.resources.map(renderCard).join('') + '</div></div>';
  }

  function renderPanel() {
    if (ui.type === 'phase') return renderPhasePanel();
    var q = ui.query.trim().toLowerCase();
    var sessions = sessionsFor(ui.week).filter(function (s) { return matchesQuery(s, q) || !q; });
    var activeSession = sessions.filter(function (s) { return s.sessionNum === ui.session; })[0] || sessions[0];
    if (!activeSession) return '<div class="empty-state">No sessions match "' + escapeHtml(ui.query) + '" in this week.</div>';

    var tabs = sessionsFor(ui.week).map(function (s) {
      return '<button class="session-tab ' + (s.sessionNum === activeSession.sessionNum ? 'active' : '') + '" data-session="' + s.sessionNum + '"><span class="n">S' + s.sessionNum + '</span>' + escapeHtml(s.name) + '</button>';
    }).join('');

    return '' +
      '<div class="week-head"><h2>Week ' + ui.week + '</h2><span class="count">' + sessionsFor(ui.week).length + ' sessions</span></div>' +
      '<div class="session-tabs">' + tabs + '</div>' +
      '<div class="session-card">' +
        '<div class="title-row"><h3>' + escapeHtml(activeSession.name) + '</h3></div>' +
        '<div class="session-meta">' + activeSession.week + ' · ' + activeSession.session + '</div>' +
        '<div class="resources">' + RESOURCES.map(function (res) {
          var item = activeSession[res.key];
          return renderCard({ label: res.label, type: res.type, text: item.text || activeSession.name, url: item.url });
        }).join('') +
        '</div>' +
      '</div>';
  }

  /* ---------- login screen ---------- */
  function renderLogin() {
    if (ui.booting) {
      return '<div class="auth-wrap"><div class="auth-card"><p class="sub" style="margin:0;">Loading…</p></div></div>';
    }
    return '' +
      '<div class="auth-wrap"><div class="auth-card">' +
        '<div class="eyebrow">Instructor Access</div>' +
        '<h1>Agentic AI Content Tracker</h1>' +
        '<p class="sub">Enter the email you were given access with. Everyone\'s activity here is logged for the course admins.</p>' +
        '<label class="field-label" for="login-email">Email address</label>' +
        '<input class="text-input" id="login-email" type="email" placeholder="you@example.com" value="' + escapeAttr(ui.loginInput) + '" autocomplete="email" />' +
        (ui.loginError ? '<div class="auth-error">' + escapeHtml(ui.loginError) + '</div>' : '') +
        '<button class="btn-primary auth-submit" id="login-submit">Continue</button>' +
      '</div></div>';
  }

  /* ---------- admin modal ---------- */
  function renderAdminAccessTab() {
    var users = ui.adminUsers.slice().sort(function (a, b) { return a.email.localeCompare(b.email); });
    var rows = users.map(function (u) {
      return '<tr><td class="mono">' + escapeHtml(u.email) + '</td>' +
        '<td><span class="pill-role ' + u.role + '">' + u.role + '</span></td>' +
        '<td>' + escapeHtml((u.addedAt || '').slice(0, 10)) + '</td>' +
        '<td>' + (u.email === ui.email ? '<span class="sync-note">you</span>' : '<button class="btn-danger" data-remove-user="' + escapeAttr(u.email) + '">Remove</button>') + '</td></tr>';
    }).join('');

    return '' +
      '<div class="admin-section">' +
        '<h3>Add one instructor</h3>' +
        '<div class="admin-row">' +
          '<input type="email" id="admin-add-email" placeholder="name@school.edu" value="' + escapeAttr(ui.adminAddEmail) + '" />' +
          '<select id="admin-add-role">' +
            '<option value="instructor" ' + (ui.adminAddRole === 'instructor' ? 'selected' : '') + '>Instructor</option>' +
            '<option value="admin" ' + (ui.adminAddRole === 'admin' ? 'selected' : '') + '>Admin</option>' +
          '</select>' +
          '<button class="btn-primary" style="flex:none;" id="admin-add-btn">Add</button>' +
        '</div>' +
      '</div>' +
      '<div class="admin-section">' +
        '<h3>Bulk add via CSV</h3>' +
        '<div class="file-drop">One email per line, optional second column for role (<span class="mono">email,admin</span>). No header needed.' +
          '<input type="file" id="admin-csv-input" accept=".csv,text/csv,text/plain" /></div>' +
      '</div>' +
      '<div class="admin-section">' +
        '<h3>Access list (' + users.length + ')</h3>' +
        '<div class="table-scroll"><table class="data-table"><thead><tr><th>Email</th><th>Role</th><th>Added</th><th></th></tr></thead><tbody>' +
          (ui.adminUsersLoading ? '<tr><td colspan="4" class="sync-note">Loading…</td></tr>' : (rows || '<tr><td colspan="4" class="sync-note">No one added yet.</td></tr>')) +
        '</tbody></table></div>' +
      '</div>';
  }

  function renderAdminLogsTab() {
    var q = ui.adminLogFilter.trim().toLowerCase();
    var logs = ui.adminLogs.filter(function (l) {
      if (!q) return true;
      return (l.email + ' ' + l.action + ' ' + l.detail).toLowerCase().indexOf(q) !== -1;
    });
    var rows = logs.map(function (l) {
      return '<tr><td class="mono" style="white-space:nowrap;">' + fmtTime(l.ts) + '</td>' +
        '<td class="mono">' + escapeHtml(l.email) + '</td>' +
        '<td><span class="pill-action ' + (['login', 'login_failed', 'open_resource', 'copy_link'].indexOf(l.action) !== -1 ? l.action : 'default') + '">' + escapeHtml(l.action) + '</span></td>' +
        '<td>' + escapeHtml(l.detail) + '</td></tr>';
    }).join('');
    return '' +
      '<div class="admin-toolbar">' +
        '<input class="admin-search" id="admin-log-filter" placeholder="Filter by email, action, detail…" value="' + escapeAttr(ui.adminLogFilter) + '" />' +
        '<div style="display:flex;gap:8px;align-items:center;">' +
          '<span class="sync-note">' + (ui.adminLogsLoading ? 'Loading…' : (ui.adminLogs.length + ' shown (most recent 500)')) + '</span>' +
          '<button class="btn-secondary" id="admin-export-csv">Export CSV</button>' +
        '</div>' +
      '</div>' +
      '<div class="table-scroll"><table class="data-table"><thead><tr><th>Time</th><th>Email</th><th>Action</th><th>Detail</th></tr></thead><tbody>' +
        (rows || '<tr><td colspan="4" class="sync-note">No activity logged yet.</td></tr>') +
      '</tbody></table></div>' +
      '<p class="sync-note" style="margin-top:10px;">Every login, resource open, and copy is recorded server-side the moment it happens. Export CSV downloads the full history.</p>';
  }

  function renderAdminModal() {
    if (!ui.adminOpen) return '';
    return '' +
      '<div class="modal-overlay" id="admin-overlay">' +
        '<div class="modal" id="admin-modal">' +
          '<div class="modal-head"><h2>Admin — access &amp; activity</h2><button class="modal-close" id="admin-close">✕</button></div>' +
          '<div class="modal-body">' +
            '<div class="session-tabs">' +
              '<button class="session-tab ' + (ui.adminTab === 'access' ? 'active' : '') + '" data-admin-tab="access">Access list</button>' +
              '<button class="session-tab ' + (ui.adminTab === 'logs' ? 'active' : '') + '" data-admin-tab="logs">Activity logs</button>' +
            '</div>' +
            (ui.adminTab === 'access' ? renderAdminAccessTab() : renderAdminLogsTab()) +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* ---------- app shell (logged in) ---------- */
  function renderApp() {
    return '' +
      '<div class="shell">' +
        '<header class="top">' +
          '<div class="topbar">' +
            '<div>' +
              '<div class="eyebrow">Instructor Access</div>' +
              '<h1>Agentic AI — Content Tracker</h1>' +
            '</div>' +
            '<div class="userbar">' +
              '<span class="chip ' + (ui.role === 'admin' ? 'role-admin' : '') + '">' + escapeHtml(ui.email) + (ui.role === 'admin' ? ' · admin' : '') + '</span>' +
              (ui.role === 'admin' ? '<button class="btn-secondary" id="open-admin">Admin panel</button>' : '') +
              '<button class="btn-secondary" id="logout-btn">Log out</button>' +
            '</div>' +
          '</div>' +
          '<p class="lede">Every lecture doc, slide deck, and hands-on notebook across all 16 weeks, in one place. Pick a week, then a session — each resource shows its link before you open it.</p>' +
          '<div class="howto"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.3"/><path d="M8 7.2v3.6M8 5.2v.01" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>' +
            '<div><strong>How to use this page:</strong> select a week on the left, then a session tab. Dashed <strong>Phase Project</strong> entries sit between weeks at their milestone points. All links are public Google Docs / Slides / Colab / GitHub URLs — your access here is logged.</div></div>' +
          '<div class="search-row"><div class="search-box"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.4"/><path d="M11 11L14.5 14.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>' +
            '<input id="search" type="text" placeholder="Search by topic…" autocomplete="off" value="' + escapeAttr(ui.query) + '" /></div><span class="result-count" id="resultCount"></span></div>' +
        '</header>' +
        '<div class="layout"><nav class="weeks" id="weekNav">' + renderNav() + '</nav><main class="panel" id="panel">' + renderPanel() + '</main></div>' +
        '<footer class="foot"><span>Internal tracker · 16 weeks · 48 sessions</span><span>Links open in a new tab · access &amp; activity logged</span></footer>' +
      '</div>' +
      renderAdminModal() +
      (ui.toast ? '<div class="toast">' + escapeHtml(ui.toast) + '</div>' : '');
  }

  /* ---------- render + events ---------- */
  function render() {
    root.innerHTML = ui.email ? renderApp() : renderLogin();
    bind();
  }

  function bind() {
    if (!ui.email) {
      var emailInput = document.getElementById('login-email');
      var submit = document.getElementById('login-submit');
      if (emailInput) {
        emailInput.focus();
        emailInput.addEventListener('input', function (e) { ui.loginInput = e.target.value; });
        emailInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') doLogin(); });
      }
      if (submit) submit.addEventListener('click', doLogin);
      return;
    }

    var search = document.getElementById('search');
    if (search) search.addEventListener('input', function (e) { ui.query = e.target.value; render(); });

    document.querySelectorAll('[data-week]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        ui.type = 'week'; ui.week = parseInt(btn.getAttribute('data-week'), 10);
        var q = ui.query.trim().toLowerCase();
        var first = sessionsFor(ui.week).filter(function (s) { return matchesQuery(s, q) || !q; })[0] || sessionsFor(ui.week)[0];
        ui.session = first ? first.sessionNum : null;
        render();
      });
    });
    document.querySelectorAll('[data-phase]').forEach(function (btn) {
      btn.addEventListener('click', function () { ui.type = 'phase'; ui.phaseId = btn.getAttribute('data-phase'); render(); });
    });
    document.querySelectorAll('[data-session]').forEach(function (btn) {
      btn.addEventListener('click', function () { ui.session = parseInt(btn.getAttribute('data-session'), 10); render(); });
    });
    document.querySelectorAll('[data-open-url]').forEach(function (a) {
      a.addEventListener('click', function () { logEvent('open_resource', a.getAttribute('data-open-label')); });
    });
    document.querySelectorAll('[data-copy-url]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var url = btn.getAttribute('data-copy-url');
        navigator.clipboard && navigator.clipboard.writeText(url).then(function () {
          btn.classList.add('copied');
          btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
          setTimeout(function () { btn.classList.remove('copied'); btn.innerHTML = copyIconSvg(); }, 1400);
        });
        logEvent('copy_link', btn.getAttribute('data-copy-label'));
      });
    });

    var logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.addEventListener('click', function () {
      api('/api/logout', { method: 'POST' }).catch(function () {}).then(function () {
        ui.email = null; ui.role = null; ui.adminOpen = false;
        render();
      });
    });
    var openAdmin = document.getElementById('open-admin');
    if (openAdmin) openAdmin.addEventListener('click', function () {
      ui.adminOpen = true; ui.adminTab = 'access'; render();
      loadAdminUsers();
    });
    var adminClose = document.getElementById('admin-close');
    if (adminClose) adminClose.addEventListener('click', function () { ui.adminOpen = false; render(); });
    var overlay = document.getElementById('admin-overlay');
    if (overlay) overlay.addEventListener('mousedown', function (e) { if (e.target === overlay) { ui.adminOpen = false; render(); } });

    document.querySelectorAll('[data-admin-tab]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        ui.adminTab = btn.getAttribute('data-admin-tab');
        render();
        if (ui.adminTab === 'logs') loadAdminLogs();
        else loadAdminUsers();
      });
    });

    var addBtn = document.getElementById('admin-add-btn');
    if (addBtn) addBtn.addEventListener('click', doAdminAdd);
    var addEmailInput = document.getElementById('admin-add-email');
    if (addEmailInput) {
      addEmailInput.addEventListener('input', function (e) { ui.adminAddEmail = e.target.value; });
      addEmailInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') doAdminAdd(); });
    }
    var addRoleSel = document.getElementById('admin-add-role');
    if (addRoleSel) addRoleSel.addEventListener('change', function (e) { ui.adminAddRole = e.target.value; });

    var csvInput = document.getElementById('admin-csv-input');
    if (csvInput) csvInput.addEventListener('change', function (e) {
      var file = e.target.files && e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () { doAdminBulkAdd(String(reader.result || '')); csvInput.value = ''; };
      reader.readAsText(file);
    });

    document.querySelectorAll('[data-remove-user]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var email = btn.getAttribute('data-remove-user');
        if (!confirm('Remove access for ' + email + '?')) return;
        api('/api/admin/users?email=' + encodeURIComponent(email), { method: 'DELETE' }).then(function (res) {
          if (res.ok) { showToast('Removed ' + email); loadAdminUsers(); }
          else showToast('Could not remove — try again.');
        }).catch(function () { showToast('Network error — try again.'); });
      });
    });

    var logFilter = document.getElementById('admin-log-filter');
    if (logFilter) logFilter.addEventListener('input', function (e) { ui.adminLogFilter = e.target.value; render(); });

    var exportBtn = document.getElementById('admin-export-csv');
    if (exportBtn) exportBtn.addEventListener('click', doExportLogs);
  }

  function doLogin() {
    var email = (ui.loginInput || '').trim().toLowerCase();
    if (!email) { ui.loginError = 'Enter your email to continue.'; render(); return; }
    api('/api/login', { method: 'POST', body: { email: email } }).then(function (res) {
      if (res.ok && res.data && res.data.ok) {
        ui.email = res.data.email;
        ui.role = res.data.role;
        ui.loginError = '';
        render();
      } else if (res.data && res.data.error === 'not_authorized') {
        ui.loginError = 'That email is not on the access list yet. Ask your admin to add it.';
        render();
      } else {
        ui.loginError = 'Something went wrong — try again.';
        render();
      }
    }).catch(function () {
      ui.loginError = 'Network error — try again.';
      render();
    });
  }

  function loadAdminUsers() {
    ui.adminUsersLoading = true; render();
    api('/api/admin/users').then(function (res) {
      ui.adminUsersLoading = false;
      if (res.ok && res.data && res.data.users) ui.adminUsers = res.data.users;
      render();
    }).catch(function () { ui.adminUsersLoading = false; render(); });
  }

  function loadAdminLogs() {
    ui.adminLogsLoading = true; render();
    api('/api/admin/logs?limit=500').then(function (res) {
      ui.adminLogsLoading = false;
      if (res.ok && res.data && res.data.logs) ui.adminLogs = res.data.logs;
      render();
    }).catch(function () { ui.adminLogsLoading = false; render(); });
  }

  function doAdminAdd() {
    var email = (ui.adminAddEmail || '').trim().toLowerCase();
    if (!email || email.indexOf('@') === -1) { showToast('Enter a valid email first.'); return; }
    api('/api/admin/users', { method: 'POST', body: { email: email, role: ui.adminAddRole } }).then(function (res) {
      if (res.ok) {
        ui.adminAddEmail = '';
        showToast('Added ' + email);
        loadAdminUsers();
      } else {
        showToast('Could not add — try again.');
        render();
      }
    }).catch(function () { showToast('Network error — try again.'); });
  }

  function doAdminBulkAdd(text) {
    var lines = text.split(/\r?\n/).map(function (l) { return l.trim(); }).filter(Boolean);
    var rows = [];
    lines.forEach(function (line) {
      var parts = line.split(',').map(function (p) { return p.replace(/^"|"$/g, '').trim(); });
      var email = (parts[0] || '').toLowerCase();
      if (email.indexOf('@') === -1) return; // skip header/junk rows
      var role = (parts[1] || 'instructor').toLowerCase();
      if (role !== 'admin') role = 'instructor';
      rows.push({ email: email, role: role });
    });
    if (!rows.length) { showToast('No valid emails found in that file.'); return; }
    api('/api/admin/users', { method: 'POST', body: { rows: rows } }).then(function (res) {
      if (res.ok) {
        showToast('Added ' + (res.data.added ? res.data.added.length : rows.length) + ' email(s).');
        loadAdminUsers();
      } else {
        showToast('Bulk add failed — try again.');
        render();
      }
    }).catch(function () { showToast('Network error — try again.'); });
  }

  function doExportLogs() {
    logEvent('export_logs', '');
    window.location.href = '/api/admin/logs?export=csv';
  }

  var toastTimer = null;
  function showToast(msg) {
    ui.toast = msg;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { ui.toast = null; render(); }, 2600);
    render();
  }

  boot();
})();
