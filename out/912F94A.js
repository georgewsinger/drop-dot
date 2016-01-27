goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33733__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33734__i = 0, G__33734__a = new Array(arguments.length -  0);
while (G__33734__i < G__33734__a.length) {G__33734__a[G__33734__i] = arguments[G__33734__i + 0]; ++G__33734__i;}
  args = new cljs.core.IndexedSeq(G__33734__a,0);
} 
return G__33733__delegate.call(this,args);};
G__33733.cljs$lang$maxFixedArity = 0;
G__33733.cljs$lang$applyTo = (function (arglist__33735){
var args = cljs.core.seq(arglist__33735);
return G__33733__delegate(args);
});
G__33733.cljs$core$IFn$_invoke$arity$variadic = G__33733__delegate;
return G__33733;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33736__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33737__i = 0, G__33737__a = new Array(arguments.length -  0);
while (G__33737__i < G__33737__a.length) {G__33737__a[G__33737__i] = arguments[G__33737__i + 0]; ++G__33737__i;}
  args = new cljs.core.IndexedSeq(G__33737__a,0);
} 
return G__33736__delegate.call(this,args);};
G__33736.cljs$lang$maxFixedArity = 0;
G__33736.cljs$lang$applyTo = (function (arglist__33738){
var args = cljs.core.seq(arglist__33738);
return G__33736__delegate(args);
});
G__33736.cljs$core$IFn$_invoke$arity$variadic = G__33736__delegate;
return G__33736;
})()
;

return null;
});
