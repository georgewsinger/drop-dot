goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52526__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52527__i = 0, G__52527__a = new Array(arguments.length -  0);
while (G__52527__i < G__52527__a.length) {G__52527__a[G__52527__i] = arguments[G__52527__i + 0]; ++G__52527__i;}
  args = new cljs.core.IndexedSeq(G__52527__a,0);
} 
return G__52526__delegate.call(this,args);};
G__52526.cljs$lang$maxFixedArity = 0;
G__52526.cljs$lang$applyTo = (function (arglist__52528){
var args = cljs.core.seq(arglist__52528);
return G__52526__delegate(args);
});
G__52526.cljs$core$IFn$_invoke$arity$variadic = G__52526__delegate;
return G__52526;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52529__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52530__i = 0, G__52530__a = new Array(arguments.length -  0);
while (G__52530__i < G__52530__a.length) {G__52530__a[G__52530__i] = arguments[G__52530__i + 0]; ++G__52530__i;}
  args = new cljs.core.IndexedSeq(G__52530__a,0);
} 
return G__52529__delegate.call(this,args);};
G__52529.cljs$lang$maxFixedArity = 0;
G__52529.cljs$lang$applyTo = (function (arglist__52531){
var args = cljs.core.seq(arglist__52531);
return G__52529__delegate(args);
});
G__52529.cljs$core$IFn$_invoke$arity$variadic = G__52529__delegate;
return G__52529;
})()
;

return null;
});
