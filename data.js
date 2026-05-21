const WPC_DATA = {
    mentalAbility: {
        below: [
            "The examinee may not have enough intellectual depth to cope with complicated concepts; tends to learn things more easily when presented with unfamiliar tasks in a deliberate and step-by-step manner; can study new programs and other materials more effectively if given much longer time and practice; and learns at a slow pace.",
            "The examinee can study new programs and other materials more effectively if given much longer time and practice; learns at a slow pace; would have an easier time if abstract ideas are translated into practical terms; would be more mentally receptive and efficient if given simple and direct instruction or information regarding expectations."
        ],
        average: [
            "The examinee’s mental capacity to make reasonably good decisions is average; would understand things quickly enough; reasonably adept in abstract reasoning, implying moderate potentials to acquire continued learning; can use practical procedures when faced with different situations.",
            "The examinee’s intellectual functioning is on the average range; hence he possesses the ability to assimilate ideas easily and learn if given enough time to train. He has reasonable proficiency in conceptual reasoning."
        ],
        above: [
            "The examinee has more than adequate cognitive ability; can learn new things and adjust to new work procedures easily; reasonably a fast learner.",
            "The examinee can readily handle the mental demands of the job; has more than adequate cognitive faculty. He would be able to acquaint himself with the rudiments of a new job with ease and would reasonably be a fast learner."
        ],
        modified: [
            "The examinee’s intellectual ability is average; hence he can understand things easily and learn if given a moderate amount of training. He has the ability to employ practicalities in any matter at hand in various situations but may have difficulties in handling high levels of complexities.",
            "The examinee’s innate potentials are average. He learns well when given a reasonable amount of training. He can employ practical procedures to solve problems in various ways but may have difficulty handling those which have more complexities."
        ]
    },
    bpi: {
        Hyp: { low: "he has no excessive concern with regards to physical health, thus absenteeism due to illness is negligible.", high: "he experiences significant anxiety related to physical health." },
        Dep: { low: "he feels confident, cheerful and persistent despite disappointments; has an optimistic attitude about the future.", high: "is inclined to be down-hearted and show extreme despondency; considers self to be inadequate; may be listless, remote, and preoccupied; looks at the future pessimistically." },
        Anx: { low: "he remains calm, unruffled and not worried even when confronted by unexpected occurrences; takes things as they come without fear or apprehension; maintains personal control even in crisis situations.", high: "he is easily scared and worrisome; little things, even an idea, can cause a frenzy of anxiety; afraid of physical or interpersonal danger." },
        IPs: { low: "he usually cooperates in activities which involves others, friendly and can be relied on; is not easily affected by environmental disturbances, has the facility of handling changes in routine, disappointments, others’ mistakes and authority.", high: "he is often extremely annoyed by little inconveniences, frustrations, or disappointments; uncooperative, disobedient, resistant to others, and reacts against discipline, rules and criticism." },
        Aln: { low: "he ordinarily displays socially acceptable ethical attitudes and responsibility; reports a sense of obligation to society and its laws.", high: "he expresses attitudes markedly different from common social codes; is prone to depart from the truth and behave in an unethical/illegal and untrustworthy manner; feels little or no guilt about behavior." },
        ImE: { low: "he is cautious and level headed when making choices. has the determination to adjust to complex tasks.", high: "he lacks the ability to think beyond the present and to consider the consequences of action; prone to undertake risky and reckless actions; inclined to behave irresponsibly; finds routine tasks boring." },
        PId: { low: "he accepts responsibility for whatever happens to him and does not attribute malice to others. He is not threatened by the presence of other people around him/her.", high: "he believes that certain people are hostile and are trying to make life difficult and/or unpleasant; inclined to brood; distrusts others." },
        ThD: { low: "he does not show confusion, distractibility or cognitive disorganization in a significant proportion; his ability to distinguish what is real from what is not is relatively excellent.", high: "he is markedly confused, distractible and cognitively disorganized; cannot remember simple things from day to day; reports feeling that life is dream-like, and that there is a marked difference between self and others." },
        SoI: { low: "he initiates conversation with others, is socially responsive and feels comfortable in having many friends.", high: "he avoids people generally; has few friends, or is withdrawing from friends; says little to others, even friends; seems to be uncomfortable when around others; prefers to keep to self or asocial activities." },
        SDp: { low: "he shows confidence of what he is and what he can do as a person; does not degrade himself to be worthless, unpleasant or undeserving.", high: "he degrades self as being worthless, unpleasant, and undeserving; generally, expresses a low opinion of self and refuses credit for any accomplishment." },
        Dev: { low: "he shows behaviors patterns that are similar to most people and is free from unusual symptoms and ways of thinking.", high: "he displays behavior patterns very different from most people; admits to unusual and pathological characteristics." },
        Den: { low: "he does not show defensiveness in dealing with his feelings and behavior trying to decipher what they mean rather than avoid them.", high: "is fairly defensive, may deny normal affective responses and tends to repress unpleasant or emotionally charged conditions- deals with stress through active flight or avoidance." }
    },
    eq: {
        intrapersonal: {
            "Select Result...": { male: "", female: "" },
            low: { male: "He struggles to understand his own emotions.", female: "She struggles to understand her own emotions." }, 
            average: { male: "He has a healthy awareness of his feelings.", female: "She has a healthy awareness of her feelings." }, 
            high: { male: "He possesses exceptional self-awareness and emotional control.", female: "She possesses exceptional self-awareness and emotional control." }, 
            invalid: { male: "His score on this index suggests significant discrepancies between items with similar content. High scores can be obtained from poorly motivated respondents, from those who misunderstood the instructions, or from individuals who were highly influenced by subtle differences between similar item pairs. The validity of the responses often can be clarified by asking respondents for more information about their responses to those item pairs. In the absence of such clarification from respondents, the validity of the results would be questionable.", female: "Her score on this index suggests significant discrepancies between items with similar content. High scores can be obtained from poorly motivated respondents, from those who misunderstood the instructions, or from individuals who were highly influenced by subtle differences between similar item pairs. The validity of the responses often can be clarified by asking respondents for more information about their responses to those item pairs. In the absence of such clarification from respondents, the validity of the results would be questionable." } 
        },
        interpersonal: { 
            "Select Result...": { male: "", female: "" },
            low: { male: "He may find it difficult to relate to others' perspectives.", female: "She may find it difficult to relate to others' perspectives." }, 
            average: { male: "He interacts well with others and shows empathy.", female: "She interacts well with others and shows empathy." }, 
            high: { male: "He is highly skilled at building relationships and influencing others.", female: "She is highly skilled at building relationships and influencing others." }, 
            invalid: { male: "", female: "" } 
        
        },
        stressManagement: { 
            "Select Result...": { male: "", female: "" },
            low: { male: "He is easily overwhelmed by pressure.", female: "She is easily overwhelmed by pressure." }, 
            average: { male: "He manages daily stresses effectively.", female: "She manages daily stresses effectively." }, 
            high: { male: "He remains remarkably calm and productive under high pressure.", female: "She remains remarkably calm and productive under high pressure." }, 
            invalid: { male: "", female: "" }
      
        },
        adaptability: { 
            "Select Result...": { male: "", female: "" },
            low: { male: "He prefers routine and finds change difficult.", female: "She prefers routine and finds change difficult." }, 
            average: { male: "He adjusts reasonably well to new situations.", female: "She adjusts reasonably well to new situations." }, 
            high: { male: "He is highly flexible and thrives in changing environments.", female: "She is highly flexible and thrives in changing environments." }, 
            invalid: { male: "", female: "" }
        }
    },
   leadership: {
            authoritative: {
                male: [
            "This leadership style is founded on the belief that leaders should take personal responsibility for their judgments. People who are restless, action-oriented, and have a strong personal vision of what is required would find the authoritative approach appealing. While the authoritative leader may occasionally 'consult' with group members before making decisions, their preferred method is to make the decisions first and then 'inform' or sell them to the rest of the group.",
        "This leadership approach is founded on the notion that decision-making should be personal for leaders. People who are reckless, action-oriented, and have a clear personal vision of what is required are drawn to the authoritative approach. The authoritative leader's strategy is to make the decisions first and then \"tell\" or \"sell\" them to the rest of the group, even though they may occasionally \"consult\" group members before doing so.",
        "The idea behind this style is that leaders should take personal responsibility for the decisions they make. People who are eager, want to take action, and have a clear idea of what needs to be done like the authoritative style. The strong leader may sometimes \"consult\" with group members before making decisions, but their usual method is to make the decisions first and then \"tell\" or \"sell\" them to the rest of the group.",
        "The foundation of this mode of leadership is that leaders should take full ownership of their choices. People who are restless, take initiative, and have a clear sense of what must be done are more inclined toward the authoritative approach. The method of the authoritative leader is to make decisions first and then 'inform' or ‘sell' them to the rest of the group, despite the fact that they may sometimes 'consult' group members before taking decisions."
    ],
                female: [
            "This leadership style is founded on the belief that leaders should take personal responsibility for their judgments. People who are restless, action-oriented, and have a strong personal vision of what is required would find the authoritative approach appealing. While the authoritative leader may occasionally 'consult' with group members before making decisions, their preferred method is to make the decisions first and then 'inform' or sell them to the rest of the group.",
        "This leadership approach is founded on the notion that decision-making should be personal for leaders. People who are reckless, action-oriented, and have a clear personal vision of what is required are drawn to the authoritative approach. The authoritative leader's strategy is to make the decisions first and then \"tell\" or \"sell\" them to the rest of the group, even though they may occasionally \"consult\" group members before doing so.",
        "The idea behind this style is that leaders should take personal responsibility for the decisions they make. People who are eager, want to take action, and have a clear idea of what needs to be done like the authoritative style. The strong leader may sometimes \"consult\" with group members before making decisions, but their usual method is to make the decisions first and then \"tell\" or \"sell\" them to the rest of the group.",
        "The foundation of this mode of leadership is that leaders should take full ownership of their choices. People who are restless, take initiative, and have a clear sense of what must be done are more inclined toward the authoritative approach. The method of the authoritative leader is to make decisions first and then 'inform' or ‘sell' them to the rest of the group, despite the fact that they may sometimes 'consult' group members before taking decisions."
        ]
            },
            democratic: {
                male: [
            "A democratic leader is committed to ensuring that everyone has a voice in determining the group's direction. The democratic method is predicated on the idea that teams perform better when everyone has a voice. The democratic leader's duties consist mostly of establishing and maintaining the group's framework and norms, as well as facilitating participation from members.",
        "A democratic leader is driven to make sure that everyone in the group has a say on how the group should work. The democratic style is based on the idea that groups can't work well unless everyone has a chance to fully take part. The democratic leader's main job is to set up the group's framework and rules, make sure they are followed, and make it possible for the group to do things.",
        "This kind of leader is motivated to ensure that all members of the group are provided with an opportunity to express their opinions regarding the function of the group. The democratic leadership style is founded on the principle that effective group functioning is contingent upon affording every member an opportunity to participate fully. The primary responsibility of a democratic leader is to establish the organizational structure and regulations of the group, ensure their adherence, and facilitate the group's activities.",
        "Democratic leader is committed to involving all members of the group in operational decisions. The democratic style is predicated on the idea that groups cannot be effective unless all members have the chance to participate completely. A democratic leader is primarily responsible for establishing the group's structure and ground norms, protecting them, and facilitating group activity.",
        "The organization's leader is committed to involving everyone in decision-making about how the group should function. Based on the idea that groups cannot function effectively unless all members have an opportunity to engage fully, the democratic style is used. The democratic leader's main responsibility is to develop the group's structure and ground rules, uphold them, and facilitate group activity."
    ],
                female: [
            "A democratic leader is committed to ensuring that everyone has a voice in determining the group's direction. The democratic method is predicated on the idea that teams perform better when everyone has a voice. The democratic leader's duties consist mostly of establishing and maintaining the group's framework and norms, as well as facilitating participation from members.",
        "A democratic leader is driven to make sure that everyone in the group has a say on how the group should work. The democratic style is based on the idea that groups can't work well unless everyone has a chance to fully take part. The democratic leader's main job is to set up the group's framework and rules, make sure they are followed, and make it possible for the group to do things.",
        "This kind of leader is motivated to ensure that all members of the group are provided with an opportunity to express their opinions regarding the function of the group. The democratic leadership style is founded on the principle that effective group functioning is contingent upon affording every member an opportunity to participate fully. The primary responsibility of a democratic leader is to establish the organizational structure and regulations of the group, ensure their adherence, and facilitate the group's activities.",
        "Democratic leader is committed to involving all members of the group in operational decisions. The democratic style is predicated on the idea that groups cannot be effective unless all members have the chance to participate completely. A democratic leader is primarily responsible for establishing the group's structure and ground norms, protecting them, and facilitating group activity.",
        "The organization's leader is committed to involving everyone in decision-making about how the group should function. Based on the idea that groups cannot function effectively unless all members have an opportunity to engage fully, the democratic style is used. The democratic leader's main responsibility is to develop the group's structure and ground rules, uphold them, and facilitate group activity."
        ]
            },
            facilitative: {
                male: [
            "The facilitative style of leadership is focused on making suggestions that group members may or may not embrace. Structure, content, and operation of the group are determined by group members. Facilitative leaders may have their own distinct opinions about the best courses of action, but they are unwilling to exert undue influence over the group with their own ideas. They believe that group activity should be a continuous learning process and that it is acceptable for people to make errors as long as they learn from them. It is believed that the journey is more essential than the destination.",
        "The facilitative style is all about making ideas, which group members may or may not agree with. The members of the group decide on the group's structure, material, and how it works. Facilitative leaders may have strong ideas about what the best course of action is, but they don't want to impose those ideas on the group too much. They think that doing things as a group should be a way to keep learning, and it's okay to make mistakes as long as you learn from them. People think that the trip is more important than where they end up.",
        "The facilitative approach is concerned with making ideas that group members may or may not accept. The structure, content, and functioning of the group are up to the members. While facilitative leaders may have strong convictions about the best courses of action, they are not eager to overburden the group with their personal thoughts. They think that group activities should be a continuous learning process, and that making mistakes is OK as long as people learn from them. The journey is valued more than the destination.",
        "Democratic leader is committed to involving all members of the group in operational decisions. The democratic style is predicated on the idea that groups cannot be effective unless all members have the chance to participate completely. A democratic leader is primarily responsible for establishing the group's structure and ground norms, protecting them, and facilitating group activity.",
        "The facilitative style focuses on making ideas that group members may or may not accept. It is up to the group members to decide on the group's structure, content, and functioning. Facilitative leaders may have strong opinions about the best courses of action, but they are not prepared to exert too much of a personal influence on the group. They think that group activities should involve ongoing learning and that making mistakes is OK as long as people seize the opportunity to do so. The journey is valued more highly than the final destination."
    ],
                female: [
            "The facilitative style of leadership is focused on making suggestions that group members may or may not embrace. Structure, content, and operation of the group are determined by group members. Facilitative leaders may have their own distinct opinions about the best courses of action, but they are unwilling to exert undue influence over the group with their own ideas. They believe that group activity should be a continuous learning process and that it is acceptable for people to make errors as long as they learn from them. It is believed that the journey is more essential than the destination.",
        "The facilitative style is all about making ideas, which group members may or may not agree with. The members of the group decide on the group's structure, material, and how it works. Facilitative leaders may have strong ideas about what the best course of action is, but they don't want to impose those ideas on the group too much. They think that doing things as a group should be a way to keep learning, and it's okay to make mistakes as long as you learn from them. People think that the trip is more important than where they end up.",
        "The facilitative approach is concerned with making ideas that group members may or may not accept. The structure, content, and functioning of the group are up to the members. While facilitative leaders may have strong convictions about the best courses of action, they are not eager to overburden the group with their personal thoughts. They think that group activities should be a continuous learning process, and that making mistakes is OK as long as people learn from them. The journey is valued more than the destination.",
        "Democratic leader is committed to involving all members of the group in operational decisions. The democratic style is predicated on the idea that groups cannot be effective unless all members have the chance to participate completely. A democratic leader is primarily responsible for establishing the group's structure and ground norms, protecting them, and facilitating group activity.",
        "The facilitative style focuses on making ideas that group members may or may not accept. It is up to the group members to decide on the group's structure, content, and functioning. Facilitative leaders may have strong opinions about the best courses of action, but they are not prepared to exert too much of a personal influence on the group. They think that group activities should involve ongoing learning and that making mistakes is OK as long as people seize the opportunity to do so. The journey is valued more highly than the final destination."
        ]
            },
            situational: {
                male: [
            "A leader that uses situational leadership tries to modify their behavior to fit in the demands of each circumstance. The situational leader will adapt their approach to fit the group (for instance, their current skill and confidence levels) and the specific task at hand.",
        "Situational leadership is a technique in which the leader seeks to modify their behavior in response to the needs of the scenario. The situational leader will adjust their style to fit in a specific group (for example, their current levels of expertise and confidence) and the work at hand.",
        "Situational leadership is an approach in which the leader endeavors to modify their behavior based on the requirements of each circumstance. The situational leader will adapt their style so that it is suitable for the specific group (for instance, their current levels of skill and confidence) and the specific task at hand.",
        "Situational leadership is a style in which the leader tries to change how they act based on what the situation calls for. A situational leader will change their style to fit the group (like how skilled and confident they are now) and the job at hand."
    ],
                female: [
            "A leader that uses situational leadership tries to modify their behavior to fit in the demands of each circumstance. The situational leader will adapt their approach to fit the group (for instance, their current skill and confidence levels) and the specific task at hand.",
        "Situational leadership is a technique in which the leader seeks to modify their behavior in response to the needs of the scenario. The situational leader will adjust their style to fit in a specific group (for example, their current levels of expertise and confidence) and the work at hand.",
        "Situational leadership is an approach in which the leader endeavors to modify their behavior based on the requirements of each circumstance. The situational leader will adapt their style so that it is suitable for the specific group (for instance, their current levels of skill and confidence) and the specific task at hand.",
        "Situational leadership is a style in which the leader tries to change how they act based on what the situation calls for. A situational leader will change their style to fit the group (like how skilled and confident they are now) and the job at hand."
        ]
            }
        },
    conflict: {
        collaborating: {
                male: [
            "The collaborative approach is used when both parties must be satisfied. The objective is to discover a \"win-win\" solution that benefits all parties involved. The collaborative style is appropriate for integrating solutions, learning, combining perspectives, acquiring commitment, and enhancing relationships.",
        "The collaborating conflict style is concerned with finding the most cooperative solution to problems. That entails having an open and honest debate about significant topics with all parties concerned and ensuring that everyone has had their voice. It also entails paying close attention, considering different solutions, and maintaining a nonthreatening climate in which everyone feels comfortable airing their concerns. It focuses on finding a solution that takes into account everyone's comments and makes everyone happy with the outcome.",
        "The collaborating conflict style focuses on finding the best way for everyone to get along after a fight. That means, having an honest conversation with everyone concerned about important issues and making sure everyone has a chance to talk. It also means listening carefully, looking for different ways to solve problems, and making sure everyone feels safe talking about their worries in the open. It focuses on finding an answer that takes everyone's ideas into account and makes most people happy with the end result.",
        "The collaborating conflict style prioritizes the development of a mutually beneficial resolution to conflicts through cooperation. This entails engaging in a candid dialogue regarding significant matters with all relevant stakeholders and ensuring that each of them has had the opportunity to express their views. Active listening, considering multiple perspectives, and fostering a safe and inclusive atmosphere are essential components of effective communication, as they encourage individuals to express their apprehensions and viewpoints without fear of reprisal. The approach centers on devising a resolution that takes into account the input of all parties involved and typically results in a sense of contentment among all stakeholders."
    ],
                female: [
            "The collaborative approach is used when both parties must be satisfied. The objective is to discover a \"win-win\" solution that benefits all parties involved. The collaborative style is appropriate for integrating solutions, learning, combining perspectives, acquiring commitment, and enhancing relationships.",
        "The collaborating conflict style is concerned with finding the most cooperative solution to problems. That entails having an open and honest debate about significant topics with all parties concerned and ensuring that everyone has had their voice. It also entails paying close attention, considering different solutions, and maintaining a nonthreatening climate in which everyone feels comfortable airing their concerns. It focuses on finding a solution that takes into account everyone's comments and makes everyone happy with the outcome.",
        "The collaborating conflict style focuses on finding the best way for everyone to get along after a fight. That means, having an honest conversation with everyone concerned about important issues and making sure everyone has a chance to talk. It also means listening carefully, looking for different ways to solve problems, and making sure everyone feels safe talking about their worries in the open. It focuses on finding an answer that takes everyone's ideas into account and makes most people happy with the end result.",
        "The collaborating conflict style prioritizes the development of a mutually beneficial resolution to conflicts through cooperation. This entails engaging in a candid dialogue regarding significant matters with all relevant stakeholders and ensuring that each of them has had the opportunity to express their views. Active listening, considering multiple perspectives, and fostering a safe and inclusive atmosphere are essential components of effective communication, as they encourage individuals to express their apprehensions and viewpoints without fear of reprisal. The approach centers on devising a resolution that takes into account the input of all parties involved and typically results in a sense of contentment among all stakeholders."
        ]
            },
            competing: {
                male: [
            "The competing conflict style is characterized by a high degree of assertiveness and a low degree of cooperativeness. In the workplace, the adoption of the competing conflict style entails a strong emphasis on the expression of one's own perspective, with a deep-seated conviction in its accuracy, and a reluctance to yield.",
        "The competing conflict style values boldness over cooperation. In a job, if you use the competitive conflict style, you are focused on having your point of view heard, really believe it is correct, and are unwilling to compromise.",
        "The competing conflict management style is a problem-solving approach characterized by high assertiveness and low cooperation. While utilizing this approach may facilitate achieving desired outcomes and maintaining progress in your construction endeavor, it is not without its drawbacks."
    ],
                female: [
            "The competing conflict style is characterized by a high degree of assertiveness and a low degree of cooperativeness. In the workplace, the adoption of the competing conflict style entails a strong emphasis on the expression of one's own perspective, with a deep-seated conviction in its accuracy, and a reluctance to yield.",
        "The competing conflict style values boldness over cooperation. In a job, if you use the competitive conflict style, you are focused on having your point of view heard, really believe it is correct, and are unwilling to compromise.",
        "The competing conflict management style is a problem-solving approach characterized by high assertiveness and low cooperation. While utilizing this approach may facilitate achieving desired outcomes and maintaining progress in your construction endeavor, it is not without its drawbacks."
        ]
            },
            avoiding: {
                male: [
            "The act of avoiding conflict does not constitute a resolution of the conflict in question. One tends to evade direct conflict and disengage from the other party without providing closure. Adopting a passive stance towards conflict resolution may prove to be a precarious strategy, as refraining from taking any action does not necessarily result in the cessation of the conflict. The lack of concern for the outcome may create tension in a relationship. A more optimal and efficient approach entails engaging in collaborative efforts towards devising a solution that is mutually beneficial.",
        "Avoiding conflict is the same as never dealing with it. By avoiding conflict, you leave the other person hanging. It's a dangerous strategy because ignoring the conflict won't make it go away. Additionally, it may cause relationship problems because it would appear that you don't care on how things turn out. Working together to find a solution that benefits everyone is a better and more efficient course of action.",
        "Conflict avoidance is not conflict resolution. You avoid conflict and leave the other party in suspense. It is a hazardous strategy because doing nothing will not resolve the conflict. It can also burden a relationship because you will appear that you do not care about the outcome. Collaboration on a solution that works for everyone is a superior and more efficient strategy.",
        "If you try to avoid strife, you're not dealing with it at all. You avoid a fight and leave the other person in the darkness. It's a dangerous plan, because doing nothing won't solve the problem, and it can be hard on a relationship because it looks like you don't care about what happens. Working together to find an answer that works for everyone is a better and more effective plan.",
    ],
                female: [
            "The act of avoiding conflict does not constitute a resolution of the conflict in question. One tends to evade direct conflict and disengage from the other party without providing closure. Adopting a passive stance towards conflict resolution may prove to be a precarious strategy, as refraining from taking any action does not necessarily result in the cessation of the conflict. The lack of concern for the outcome may create tension in a relationship. A more optimal and efficient approach entails engaging in collaborative efforts towards devising a solution that is mutually beneficial.",
        "Avoiding conflict is the same as never dealing with it. By avoiding conflict, you leave the other person hanging. It's a dangerous strategy because ignoring the conflict won't make it go away. Additionally, it may cause relationship problems because it would appear that you don't care on how things turn out. Working together to find a solution that benefits everyone is a better and more efficient course of action.",
        "Conflict avoidance is not conflict resolution. You avoid conflict and leave the other party in suspense. It is a hazardous strategy because doing nothing will not resolve the conflict. It can also burden a relationship because you will appear that you do not care about the outcome. Collaboration on a solution that works for everyone is a superior and more efficient strategy.",
        "If you try to avoid strife, you're not dealing with it at all. You avoid a fight and leave the other person in the darkness. It's a dangerous plan, because doing nothing won't solve the problem, and it can be hard on a relationship because it looks like you don't care about what happens. Working together to find an answer that works for everyone is a better and more effective plan.",
        ]
            },
            accommodating: {
                male: [
            "This approach entails prioritizing the needs of the other party over one's own. You concede to their demands, thereby enabling them to achieve their desired outcome. The act of accommodating is a strategy employed in situations where the individual involved may not hold a strong conviction regarding the matter at hand as the other party, where the continuation of the conflict is deemed not to be a valuable use of time, or where there is a possibility of one's own error in judgment.",
        "This method is all about placing the demands of the other party ahead of one's own. You let them 'win' and have their way. Accommodation is used when you don't care as much about the topic as the other person, if extending the conflict isn't worth your time, or if you believe you're wrong.",
        "This style involves putting the demands of the other party before one's own. You enable them to 'win' and obtain their desired outcome. When you don't care as much about the issue as the other person, when prolonging the conflict is not worth your time, or when you believe you may be mistaken, you should consider accommodation."
    ],
                female: [
            "This approach entails prioritizing the needs of the other party over one's own. You concede to their demands, thereby enabling them to achieve their desired outcome. The act of accommodating is a strategy employed in situations where the individual involved may not hold a strong conviction regarding the matter at hand as the other party, where the continuation of the conflict is deemed not to be a valuable use of time, or where there is a possibility of one's own error in judgment.",
        "This method is all about placing the demands of the other party ahead of one's own. You let them 'win' and have their way. Accommodation is used when you don't care as much about the topic as the other person, if extending the conflict isn't worth your time, or if you believe you're wrong.",
        "This style involves putting the demands of the other party before one's own. You enable them to 'win' and obtain their desired outcome. When you don't care as much about the issue as the other person, when prolonging the conflict is not worth your time, or when you believe you may be mistaken, you should consider accommodation."
        ]
            },
             compromising: {
                male: [
            "The subject displays a moderate degree of assertive and cooperative behavior. The aim of this specific approach is to ascertain a viable solution that adequately addresses the interests of both parties involved. The present scenario pertains to a state of discord where the concerned parties have failed to undertake any measures to acknowledge or satisfy the grievances of either party.",
        "The individual is forceful and cooperative to a moderate degree. In this mode, the goal is to find a practical solution that answers the interests of both sides to some extent. The circumstance entails a quarrel in which neither party has made any effort to discuss or fulfill the concerns of the other.",
        "Individuals demonstrate a moderate amount of assertiveness and cooperation. In this particular mode, the goal is to identify a workable solution that partially addresses the concerns of both parties. The situation entails a conflict in which neither party has made any effort to address or satisfy the concerns of the other.",
    ],
                female: [
            "The subject displays a moderate degree of assertive and cooperative behavior. The aim of this specific approach is to ascertain a viable solution that adequately addresses the interests of both parties involved. The present scenario pertains to a state of discord where the concerned parties have failed to undertake any measures to acknowledge or satisfy the grievances of either party.",
        "The individual is forceful and cooperative to a moderate degree. In this mode, the goal is to find a practical solution that answers the interests of both sides to some extent. The circumstance entails a quarrel in which neither party has made any effort to discuss or fulfill the concerns of the other.",
        "Individuals demonstrate a moderate amount of assertiveness and cooperation. In this particular mode, the goal is to identify a workable solution that partially addresses the concerns of both parties. The situation entails a conflict in which neither party has made any effort to address or satisfy the concerns of the other.",
        ]
            }
        },

teaching: {
            expert: {
                male: [
        "Possesses knowledge and expertise that students need. Strives to maintain status as an expert among students by displaying detailed knowledge and by challenging students to enhance their competence. Concerned with transmitting information and ensuring that students are well prepared."
    ],
                female: [
        "Possesses knowledge and expertise that students need. Strives to maintain status as an expert among students by displaying detailed knowledge and by challenging students to enhance their competence. Concerned with transmitting information and ensuring that students are well prepared."
        ]
            },
            "formal authority": {
                male: [
        "Possesses status among students because of knowledge and role as a faculty member. Concerned with providing positive and negative feedback, establishing learning goals, expectations and rules of conduct for students. Concerned with the \“correct, acceptable and standard ways to do things.\”"
    ],
                female: [
        "Possesses status among students because of knowledge and role as a faculty member. Concerned with providing positive and negative feedback, establishing learning goals, expectations and rules of conduct for students. Concerned with the \“correct, acceptable and standard ways to do things.\”"
        ]
            },
            "personal model": {
                male: [
        "Believes in \“teaching by personal example\” and establishes a prototype for how to think and behave. Oversees, guides and directs by showing how to do things and encouraging students to observe and then to emulate the instructor’s approach."
    ],
                female: [
        "Believes in \“teaching by personal example\” and establishes a prototype for how to think and behave. Oversees, guides and directs by showing how to do things and encouraging students to observe and then to emulate the instructor’s approach."
        ]
            },
            facilitator: {
                male: [
        "Emphasizes the personal nature of teacher-student interactions. Guides students by asking questions, exploring options, suggesting alternatives and encouraging them to develop criteria to make informed choices. Overall goal is to develop in students the capacity for independent action and responsibility. Works with students on projects in a consultative fashion and provides much support and encouragement."
    ],
                female: [
        "Emphasizes the personal nature of teacher-student interactions. Guides students by asking questions, exploring options, suggesting alternatives and encouraging them to develop criteria to make informed choices. Overall goal is to develop in students the capacity for independent action and responsibility. Works with students on projects in a consultative fashion and provides much support and encouragement."
        ]
            },
             delegator: {
                male: [
        "Concerned with developing students’ capacity to function autonomously. Students work independently on projects or as part of autonomous teams. The teacher is available at the request of students as a resource person.",
    ],
                female: [
        "Concerned with developing students’ capacity to function autonomously. Students work independently on projects or as part of autonomous teams. The teacher is available at the request of students as a resource person.",
        ]
            }
        },

    anxiety: [
        { max: 21, text: "The Anxiety Inventory (AI) consists of 21 self-reported items (four-point scale) used to assess the intensity of physical and cognitive anxiety symptoms during the past week.  The test result shows that he has low levels of anxiety." },
        { max: 35, text: "The Anxiety Inventory (AI) consists of 21 self-reported items (four-point scale) used to assess the intensity of physical and cognitive anxiety symptoms during the past week.  The test result shows that he has moderate levels of anxiety." },
        { max: 63, text: "The Anxiety Inventory (AI) consists of 21 self-reported items (four-point scale) used to assess the intensity of physical and cognitive anxiety symptoms during the past week.  The test result shows that he has potentially concerning levels of anxiety." }
    ],
    depression: [
        { max: 10, text: "The Depression Inventory (DI) is a 21-item, self-rated scale that evaluates key symptoms of depression including mood, pessimism, sense of failure, self-dissatisfaction, guilt, punishment, self-dislike, self-accusation, suicidal ideas, crying, irritability, social withdrawal, indecisiveness, body image change, work difficulty, insomnia, fatigability, loss of appetite, weight loss, somatic preoccupation, and loss of libido. His score shows that his depression levels are normal." },
        { max: 16, text: "The Depression Inventory (DI) is a 21-item, self-rated scale that evaluates key symptoms of depression including mood, pessimism, sense of failure, self-dissatisfaction, guilt, punishment, self-dislike, self-accusation, suicidal ideas, crying, irritability, social withdrawal, indecisiveness, body image change, work difficulty, insomnia, fatigability, loss of appetite, weight loss, somatic preoccupation, and loss of libido. His score shows that his depression levels are at a mild mood disturbance." },
        { max: 20, text: "The Depression Inventory (DI) is a 21-item, self-rated scale that evaluates key symptoms of depression including mood, pessimism, sense of failure, self-dissatisfaction, guilt, punishment, self-dislike, self-accusation, suicidal ideas, crying, irritability, social withdrawal, indecisiveness, body image change, work difficulty, insomnia, fatigability, loss of appetite, weight loss, somatic preoccupation, and loss of libido. His score shows that his depression levels are at borderline clinical depression." },
        { max: 30, text: "The Depression Inventory (DI) is a 21-item, self-rated scale that evaluates key symptoms of depression including mood, pessimism, sense of failure, self-dissatisfaction, guilt, punishment, self-dislike, self-accusation, suicidal ideas, crying, irritability, social withdrawal, indecisiveness, body image change, work difficulty, insomnia, fatigability, loss of appetite, weight loss, somatic preoccupation, and loss of libido. His score shows that his depression levels are at moderate depression." },
        { max: 40, text: "The Depression Inventory (DI) is a 21-item, self-rated scale that evaluates key symptoms of depression including mood, pessimism, sense of failure, self-dissatisfaction, guilt, punishment, self-dislike, self-accusation, suicidal ideas, crying, irritability, social withdrawal, indecisiveness, body image change, work difficulty, insomnia, fatigability, loss of appetite, weight loss, somatic preoccupation, and loss of libido. His score shows that his depression levels are at severe depression." },
        { max: 63, text: "The Depression Inventory (DI) is a 21-item, self-rated scale that evaluates key symptoms of depression including mood, pessimism, sense of failure, self-dissatisfaction, guilt, punishment, self-dislike, self-accusation, suicidal ideas, crying, irritability, social withdrawal, indecisiveness, body image change, work difficulty, insomnia, fatigability, loss of appetite, weight loss, somatic preoccupation, and loss of libido. His score shows that his depression levels are at extreme depression." }
    ],

};
