goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44111__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44112__i = 0, G__44112__a = new Array(arguments.length -  0);
while (G__44112__i < G__44112__a.length) {G__44112__a[G__44112__i] = arguments[G__44112__i + 0]; ++G__44112__i;}
  args = new cljs.core.IndexedSeq(G__44112__a,0);
} 
return G__44111__delegate.call(this,args);};
G__44111.cljs$lang$maxFixedArity = 0;
G__44111.cljs$lang$applyTo = (function (arglist__44113){
var args = cljs.core.seq(arglist__44113);
return G__44111__delegate(args);
});
G__44111.cljs$core$IFn$_invoke$arity$variadic = G__44111__delegate;
return G__44111;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44114__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44115__i = 0, G__44115__a = new Array(arguments.length -  0);
while (G__44115__i < G__44115__a.length) {G__44115__a[G__44115__i] = arguments[G__44115__i + 0]; ++G__44115__i;}
  args = new cljs.core.IndexedSeq(G__44115__a,0);
} 
return G__44114__delegate.call(this,args);};
G__44114.cljs$lang$maxFixedArity = 0;
G__44114.cljs$lang$applyTo = (function (arglist__44116){
var args = cljs.core.seq(arglist__44116);
return G__44114__delegate(args);
});
G__44114.cljs$core$IFn$_invoke$arity$variadic = G__44114__delegate;
return G__44114;
})()
;

return null;
});
