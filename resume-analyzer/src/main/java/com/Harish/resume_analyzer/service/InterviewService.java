package com.Harish.resume_analyzer.service;


import com.Harish.resume_analyzer.dto.InterviewResponse;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class InterviewService {


    public InterviewResponse evaluateAnswer(
            String question,
            String answer
    ) {


        int score = 40;


        List<String> strengths = new ArrayList<>();

        List<String> improvements = new ArrayList<>();


        String text = answer.toLowerCase();

        String questionText = question.toLowerCase();





        // Spring Boot Evaluation

        if(questionText.contains("spring boot")){


            if(text.contains("dependency injection")){

                score += 15;

                strengths.add(
                        "Explained Dependency Injection"
                );

            }
            else{

                improvements.add(
                        "Explain Dependency Injection"
                );

            }



            if(text.contains("auto configuration")){

                score += 15;

                strengths.add(
                        "Mentioned Auto Configuration"
                );

            }
            else{

                improvements.add(
                        "Add Auto Configuration concept"
                );

            }




            if(text.contains("rest")
                    || text.contains("api")){


                score += 15;

                strengths.add(
                        "Explained REST API usage"
                );

            }
            else{

                improvements.add(
                        "Mention REST API examples"
                );

            }




            if(text.contains("tomcat")
                    || text.contains("server")){


                score += 10;

                strengths.add(
                        "Mentioned Embedded Server"
                );

            }
            else{

                improvements.add(
                        "Explain Embedded Tomcat"
                );

            }


        }







        // Java Evaluation

        else if(questionText.contains("java")){


            if(text.contains("oops")
                    || text.contains("oop")){


                score += 15;

                strengths.add(
                        "Explained OOP concepts"
                );

            }
            else{

                improvements.add(
                        "Explain OOP concepts"
                );

            }



            if(text.contains("inheritance")
                    || text.contains("polymorphism")
                    || text.contains("encapsulation")){


                score += 20;

                strengths.add(
                        "Covered Java principles"
                );

            }
            else{

                improvements.add(
                        "Add Java examples"
                );

            }




            if(text.contains("jvm")){


                score += 10;

                strengths.add(
                        "Explained JVM"
                );

            }
            else{

                improvements.add(
                        "Mention JVM"
                );

            }


        }








        // React Evaluation

        else if(questionText.contains("react")){


            if(text.contains("component")){


                score += 20;

                strengths.add(
                        "Explained React Components"
                );

            }
            else{

                improvements.add(
                        "Explain Components"
                );

            }



            if(text.contains("state")
                    || text.contains("props")){


                score += 20;

                strengths.add(
                        "Mentioned Props and State"
                );

            }
            else{

                improvements.add(
                        "Explain Props and State"
                );

            }


        }








        // General improvement

        if(answer.length() > 150){

            score += 10;

            strengths.add(
                    "Answer contains good details"
            );

        }
        else{

            improvements.add(
                    "Provide more detailed explanation"
            );

        }






        if(score > 100){

            score = 100;

        }






        String feedback;


        if(score >= 80){

            feedback =
                    "Excellent answer. Add project examples for better impact.";

        }
        else if(score >= 60){

            feedback =
                    "Good attempt. Improve with more technical details.";

        }
        else{

            feedback =
                    "Needs improvement. Explain concepts with examples.";

        }







        return new InterviewResponse(

                score,

                strengths,

                improvements,

                feedback

        );


    }

}