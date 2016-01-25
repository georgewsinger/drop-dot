goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34023__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34024__i = 0, G__34024__a = new Array(arguments.length -  0);
while (G__34024__i < G__34024__a.length) {G__34024__a[G__34024__i] = arguments[G__34024__i + 0]; ++G__34024__i;}
  args = new cljs.core.IndexedSeq(G__34024__a,0);
} 
return G__34023__delegate.call(this,args);};
G__34023.cljs$lang$maxFixedArity = 0;
G__34023.cljs$lang$applyTo = (function (arglist__34025){
var args = cljs.core.seq(arglist__34025);
return G__34023__delegate(args);
});
G__34023.cljs$core$IFn$_invoke$arity$variadic = G__34023__delegate;
return G__34023;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34026__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34027__i = 0, G__34027__a = new Array(arguments.length -  0);
while (G__34027__i < G__34027__a.length) {G__34027__a[G__34027__i] = arguments[G__34027__i + 0]; ++G__34027__i;}
  args = new cljs.core.IndexedSeq(G__34027__a,0);
} 
return G__34026__delegate.call(this,args);};
G__34026.cljs$lang$maxFixedArity = 0;
G__34026.cljs$lang$applyTo = (function (arglist__34028){
var args = cljs.core.seq(arglist__34028);
return G__34026__delegate(args);
});
G__34026.cljs$core$IFn$_invoke$arity$variadic = G__34026__delegate;
return G__34026;
})()
;

return null;
});
