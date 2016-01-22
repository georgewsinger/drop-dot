goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12213__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12214__i = 0, G__12214__a = new Array(arguments.length -  0);
while (G__12214__i < G__12214__a.length) {G__12214__a[G__12214__i] = arguments[G__12214__i + 0]; ++G__12214__i;}
  args = new cljs.core.IndexedSeq(G__12214__a,0);
} 
return G__12213__delegate.call(this,args);};
G__12213.cljs$lang$maxFixedArity = 0;
G__12213.cljs$lang$applyTo = (function (arglist__12215){
var args = cljs.core.seq(arglist__12215);
return G__12213__delegate(args);
});
G__12213.cljs$core$IFn$_invoke$arity$variadic = G__12213__delegate;
return G__12213;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12216__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12217__i = 0, G__12217__a = new Array(arguments.length -  0);
while (G__12217__i < G__12217__a.length) {G__12217__a[G__12217__i] = arguments[G__12217__i + 0]; ++G__12217__i;}
  args = new cljs.core.IndexedSeq(G__12217__a,0);
} 
return G__12216__delegate.call(this,args);};
G__12216.cljs$lang$maxFixedArity = 0;
G__12216.cljs$lang$applyTo = (function (arglist__12218){
var args = cljs.core.seq(arglist__12218);
return G__12216__delegate(args);
});
G__12216.cljs$core$IFn$_invoke$arity$variadic = G__12216__delegate;
return G__12216;
})()
;

return null;
});
