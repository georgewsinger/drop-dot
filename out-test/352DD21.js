goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11480__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11481__i = 0, G__11481__a = new Array(arguments.length -  0);
while (G__11481__i < G__11481__a.length) {G__11481__a[G__11481__i] = arguments[G__11481__i + 0]; ++G__11481__i;}
  args = new cljs.core.IndexedSeq(G__11481__a,0);
} 
return G__11480__delegate.call(this,args);};
G__11480.cljs$lang$maxFixedArity = 0;
G__11480.cljs$lang$applyTo = (function (arglist__11482){
var args = cljs.core.seq(arglist__11482);
return G__11480__delegate(args);
});
G__11480.cljs$core$IFn$_invoke$arity$variadic = G__11480__delegate;
return G__11480;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11483__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11484__i = 0, G__11484__a = new Array(arguments.length -  0);
while (G__11484__i < G__11484__a.length) {G__11484__a[G__11484__i] = arguments[G__11484__i + 0]; ++G__11484__i;}
  args = new cljs.core.IndexedSeq(G__11484__a,0);
} 
return G__11483__delegate.call(this,args);};
G__11483.cljs$lang$maxFixedArity = 0;
G__11483.cljs$lang$applyTo = (function (arglist__11485){
var args = cljs.core.seq(arglist__11485);
return G__11483__delegate(args);
});
G__11483.cljs$core$IFn$_invoke$arity$variadic = G__11483__delegate;
return G__11483;
})()
;

return null;
});
