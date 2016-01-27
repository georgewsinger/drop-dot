goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49617__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49618__i = 0, G__49618__a = new Array(arguments.length -  0);
while (G__49618__i < G__49618__a.length) {G__49618__a[G__49618__i] = arguments[G__49618__i + 0]; ++G__49618__i;}
  args = new cljs.core.IndexedSeq(G__49618__a,0);
} 
return G__49617__delegate.call(this,args);};
G__49617.cljs$lang$maxFixedArity = 0;
G__49617.cljs$lang$applyTo = (function (arglist__49619){
var args = cljs.core.seq(arglist__49619);
return G__49617__delegate(args);
});
G__49617.cljs$core$IFn$_invoke$arity$variadic = G__49617__delegate;
return G__49617;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49620__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49621__i = 0, G__49621__a = new Array(arguments.length -  0);
while (G__49621__i < G__49621__a.length) {G__49621__a[G__49621__i] = arguments[G__49621__i + 0]; ++G__49621__i;}
  args = new cljs.core.IndexedSeq(G__49621__a,0);
} 
return G__49620__delegate.call(this,args);};
G__49620.cljs$lang$maxFixedArity = 0;
G__49620.cljs$lang$applyTo = (function (arglist__49622){
var args = cljs.core.seq(arglist__49622);
return G__49620__delegate(args);
});
G__49620.cljs$core$IFn$_invoke$arity$variadic = G__49620__delegate;
return G__49620;
})()
;

return null;
});
