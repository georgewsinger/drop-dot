goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39227__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39228__i = 0, G__39228__a = new Array(arguments.length -  0);
while (G__39228__i < G__39228__a.length) {G__39228__a[G__39228__i] = arguments[G__39228__i + 0]; ++G__39228__i;}
  args = new cljs.core.IndexedSeq(G__39228__a,0);
} 
return G__39227__delegate.call(this,args);};
G__39227.cljs$lang$maxFixedArity = 0;
G__39227.cljs$lang$applyTo = (function (arglist__39229){
var args = cljs.core.seq(arglist__39229);
return G__39227__delegate(args);
});
G__39227.cljs$core$IFn$_invoke$arity$variadic = G__39227__delegate;
return G__39227;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39230__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39231__i = 0, G__39231__a = new Array(arguments.length -  0);
while (G__39231__i < G__39231__a.length) {G__39231__a[G__39231__i] = arguments[G__39231__i + 0]; ++G__39231__i;}
  args = new cljs.core.IndexedSeq(G__39231__a,0);
} 
return G__39230__delegate.call(this,args);};
G__39230.cljs$lang$maxFixedArity = 0;
G__39230.cljs$lang$applyTo = (function (arglist__39232){
var args = cljs.core.seq(arglist__39232);
return G__39230__delegate(args);
});
G__39230.cljs$core$IFn$_invoke$arity$variadic = G__39230__delegate;
return G__39230;
})()
;

return null;
});
