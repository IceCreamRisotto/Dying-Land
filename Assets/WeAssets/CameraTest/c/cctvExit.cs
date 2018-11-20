using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class cctvExit : MonoBehaviour {

    public Camera cctv;
    public Camera main;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Player"))
        {
            main.depth = 1;
            cctv.depth = 0;
        }
    }
}
