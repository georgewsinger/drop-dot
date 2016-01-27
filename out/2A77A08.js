goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__305972__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__305972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__305973__i = 0, G__305973__a = new Array(arguments.length -  0);
while (G__305973__i < G__305973__a.length) {G__305973__a[G__305973__i] = arguments[G__305973__i + 0]; ++G__305973__i;}
  args = new cljs.core.IndexedSeq(G__305973__a,0);
} 
return G__305972__delegate.call(this,args);};
G__305972.cljs$lang$maxFixedArity = 0;
G__305972.cljs$lang$applyTo = (function (arglist__305974){
var args = cljs.core.seq(arglist__305974);
return G__305972__delegate(args);
});
G__305972.cljs$core$IFn$_invoke$arity$variadic = G__305972__delegate;
return G__305972;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__305975__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__305975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__305976__i = 0, G__305976__a = new Array(arguments.length -  0);
while (G__305976__i < G__305976__a.length) {G__305976__a[G__305976__i] = arguments[G__305976__i + 0]; ++G__305976__i;}
  args = new cljs.core.IndexedSeq(G__305976__a,0);
} 
return G__305975__delegate.call(this,args);};
G__305975.cljs$lang$maxFixedArity = 0;
G__305975.cljs$lang$applyTo = (function (arglist__305977){
var args = cljs.core.seq(arglist__305977);
return G__305975__delegate(args);
});
G__305975.cljs$core$IFn$_invoke$arity$variadic = G__305975__delegate;
return G__305975;
})()
;

return null;
});
