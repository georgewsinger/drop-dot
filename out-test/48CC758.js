goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39111__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39112__i = 0, G__39112__a = new Array(arguments.length -  0);
while (G__39112__i < G__39112__a.length) {G__39112__a[G__39112__i] = arguments[G__39112__i + 0]; ++G__39112__i;}
  args = new cljs.core.IndexedSeq(G__39112__a,0);
} 
return G__39111__delegate.call(this,args);};
G__39111.cljs$lang$maxFixedArity = 0;
G__39111.cljs$lang$applyTo = (function (arglist__39113){
var args = cljs.core.seq(arglist__39113);
return G__39111__delegate(args);
});
G__39111.cljs$core$IFn$_invoke$arity$variadic = G__39111__delegate;
return G__39111;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39114__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39115__i = 0, G__39115__a = new Array(arguments.length -  0);
while (G__39115__i < G__39115__a.length) {G__39115__a[G__39115__i] = arguments[G__39115__i + 0]; ++G__39115__i;}
  args = new cljs.core.IndexedSeq(G__39115__a,0);
} 
return G__39114__delegate.call(this,args);};
G__39114.cljs$lang$maxFixedArity = 0;
G__39114.cljs$lang$applyTo = (function (arglist__39116){
var args = cljs.core.seq(arglist__39116);
return G__39114__delegate(args);
});
G__39114.cljs$core$IFn$_invoke$arity$variadic = G__39114__delegate;
return G__39114;
})()
;

return null;
});
