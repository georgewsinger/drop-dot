goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__152188__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__152188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152189__i = 0, G__152189__a = new Array(arguments.length -  0);
while (G__152189__i < G__152189__a.length) {G__152189__a[G__152189__i] = arguments[G__152189__i + 0]; ++G__152189__i;}
  args = new cljs.core.IndexedSeq(G__152189__a,0);
} 
return G__152188__delegate.call(this,args);};
G__152188.cljs$lang$maxFixedArity = 0;
G__152188.cljs$lang$applyTo = (function (arglist__152190){
var args = cljs.core.seq(arglist__152190);
return G__152188__delegate(args);
});
G__152188.cljs$core$IFn$_invoke$arity$variadic = G__152188__delegate;
return G__152188;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__152191__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__152191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152192__i = 0, G__152192__a = new Array(arguments.length -  0);
while (G__152192__i < G__152192__a.length) {G__152192__a[G__152192__i] = arguments[G__152192__i + 0]; ++G__152192__i;}
  args = new cljs.core.IndexedSeq(G__152192__a,0);
} 
return G__152191__delegate.call(this,args);};
G__152191.cljs$lang$maxFixedArity = 0;
G__152191.cljs$lang$applyTo = (function (arglist__152193){
var args = cljs.core.seq(arglist__152193);
return G__152191__delegate(args);
});
G__152191.cljs$core$IFn$_invoke$arity$variadic = G__152191__delegate;
return G__152191;
})()
;

return null;
});
