using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Sprites;
using System.Threading;
//using System;

public class hp : MonoBehaviour{

	public GameObject[] image;//生命的圖片
	public float superTime;//無敵時間
    private int life;//生命

    private Animator hurt_animator;//受傷害動畫
	private BoxCollider2D collider2d;//傷害的碰撞器
	private SpriteRenderer sprite_falsh;//玩家圖片
	public float speed;//閃爍平率
	private bool damage;//傷害的狀態
	private float time_i;//閃爍用計時器
    //private Coroutine collision;
    private ArrayList co_list = new ArrayList();



    void Start(){
		damage=false;
		life = 3;
		collider2d=GetComponent<BoxCollider2D> ();
		hurt_animator = GameObject.Find ("player").GetComponent<Animator> ();
		sprite_falsh = GameObject.Find ("player-climb-4").GetComponent<SpriteRenderer> ();
	}

    void Update() {
        falsh_time();//判斷是否為無敵時間
    }
    
	void OnTriggerStay2D(Collider2D co){
		if (co.gameObject.tag == "monster") {
            co_list.Add(1);
            //collider2d.enabled = false;//關掉hurt碰撞器
            if (co_list.Count <= 1) {
                life -= 1;
                life = Mathf.Clamp(life, 0, 3);
                hurt_animator.Play("hurt");//受傷動畫
                StartCoroutine(falsh_animator());
                life_image();//血條圖片
                Destroy(co.gameObject);
            }
        }
	}

    IEnumerator falsh_animator()
    {
        damage = true;
        yield return new WaitForSeconds(superTime);//結束無敵時間為superTime,結束後往下執行
        co_list.Clear();
        damage = false;
        time_i = 0f;
        sprite_falsh.color = Color.white;
        collider2d.enabled = true;//打開hurt的碰撞器的box collider
    }

    void falsh_time (){//閃爍
		if (damage) {
			time_i += Time.deltaTime;
			if (time_i % speed < speed/2f) {
				sprite_falsh.color = Color.clear;
			} else {
				sprite_falsh.color = Color.white;
			}
		} 
	}

	void life_image(){//UI介面的血量
        for (int i = 0; i <= 3; i++) {
            if (i == life){
                image[i].SetActive(true);
            }
            else {
                image[i].SetActive(false);
            }
        }
	}


}
