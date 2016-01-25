goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__250599__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__250599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__250600__i = 0, G__250600__a = new Array(arguments.length -  0);
while (G__250600__i < G__250600__a.length) {G__250600__a[G__250600__i] = arguments[G__250600__i + 0]; ++G__250600__i;}
  args = new cljs.core.IndexedSeq(G__250600__a,0);
} 
return G__250599__delegate.call(this,args);};
G__250599.cljs$lang$maxFixedArity = 0;
G__250599.cljs$lang$applyTo = (function (arglist__250601){
var args = cljs.core.seq(arglist__250601);
return G__250599__delegate(args);
});
G__250599.cljs$core$IFn$_invoke$arity$variadic = G__250599__delegate;
return G__250599;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__250602__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__250602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__250603__i = 0, G__250603__a = new Array(arguments.length -  0);
while (G__250603__i < G__250603__a.length) {G__250603__a[G__250603__i] = arguments[G__250603__i + 0]; ++G__250603__i;}
  args = new cljs.core.IndexedSeq(G__250603__a,0);
} 
return G__250602__delegate.call(this,args);};
G__250602.cljs$lang$maxFixedArity = 0;
G__250602.cljs$lang$applyTo = (function (arglist__250604){
var args = cljs.core.seq(arglist__250604);
return G__250602__delegate(args);
});
G__250602.cljs$core$IFn$_invoke$arity$variadic = G__250602__delegate;
return G__250602;
})()
;

return null;
});
