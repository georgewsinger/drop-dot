goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62480__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62481__i = 0, G__62481__a = new Array(arguments.length -  0);
while (G__62481__i < G__62481__a.length) {G__62481__a[G__62481__i] = arguments[G__62481__i + 0]; ++G__62481__i;}
  args = new cljs.core.IndexedSeq(G__62481__a,0);
} 
return G__62480__delegate.call(this,args);};
G__62480.cljs$lang$maxFixedArity = 0;
G__62480.cljs$lang$applyTo = (function (arglist__62482){
var args = cljs.core.seq(arglist__62482);
return G__62480__delegate(args);
});
G__62480.cljs$core$IFn$_invoke$arity$variadic = G__62480__delegate;
return G__62480;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62483__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62484__i = 0, G__62484__a = new Array(arguments.length -  0);
while (G__62484__i < G__62484__a.length) {G__62484__a[G__62484__i] = arguments[G__62484__i + 0]; ++G__62484__i;}
  args = new cljs.core.IndexedSeq(G__62484__a,0);
} 
return G__62483__delegate.call(this,args);};
G__62483.cljs$lang$maxFixedArity = 0;
G__62483.cljs$lang$applyTo = (function (arglist__62485){
var args = cljs.core.seq(arglist__62485);
return G__62483__delegate(args);
});
G__62483.cljs$core$IFn$_invoke$arity$variadic = G__62483__delegate;
return G__62483;
})()
;

return null;
});
