goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32216__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32217__i = 0, G__32217__a = new Array(arguments.length -  0);
while (G__32217__i < G__32217__a.length) {G__32217__a[G__32217__i] = arguments[G__32217__i + 0]; ++G__32217__i;}
  args = new cljs.core.IndexedSeq(G__32217__a,0);
} 
return G__32216__delegate.call(this,args);};
G__32216.cljs$lang$maxFixedArity = 0;
G__32216.cljs$lang$applyTo = (function (arglist__32218){
var args = cljs.core.seq(arglist__32218);
return G__32216__delegate(args);
});
G__32216.cljs$core$IFn$_invoke$arity$variadic = G__32216__delegate;
return G__32216;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32219__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32220__i = 0, G__32220__a = new Array(arguments.length -  0);
while (G__32220__i < G__32220__a.length) {G__32220__a[G__32220__i] = arguments[G__32220__i + 0]; ++G__32220__i;}
  args = new cljs.core.IndexedSeq(G__32220__a,0);
} 
return G__32219__delegate.call(this,args);};
G__32219.cljs$lang$maxFixedArity = 0;
G__32219.cljs$lang$applyTo = (function (arglist__32221){
var args = cljs.core.seq(arglist__32221);
return G__32219__delegate(args);
});
G__32219.cljs$core$IFn$_invoke$arity$variadic = G__32219__delegate;
return G__32219;
})()
;

return null;
});
